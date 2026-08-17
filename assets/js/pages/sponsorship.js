/* =============================================================================
   Credit Danny — page script: sponsorship
   -----------------------------------------------------------------------------
   The scroll-reveal cascade (and carousel, where present) for this page only.
   These differ materially between pages — different target selectors, stagger
   steps, distances, easings and paging maths — so they are kept per page rather
   than merged into a single lossy abstraction.

   Site-wide behaviour lives in assets/js/main.js, which must load first.
   ========================================================================== */
(function () {
  'use strict';
  var reduce = !!(window.CD && window.CD.reduce);

  /* ---- the reveal cascade, ported from the export's setupReveal() ---- */
  if (!reduce && 'IntersectionObserver' in window) {
    var SEL = 'h1,h2,h3,p,img,image-slot,a,button,div[style*="border-radius"]';
    var marked = [];
    Array.prototype.forEach.call(document.querySelectorAll('section'), function(section){
      var picked = [];
      Array.prototype.forEach.call(section.querySelectorAll(SEL), function(el){
        if (el.closest('[data-track]')) return;   /* the carousel scrolls itself */
        /* The floating box (the USA Today chip) is revealed like everything
           else; only its CHILDREN are skipped, so it does not animate twice. */
        var floater = el.closest('[data-float]');
        if (floater && floater !== el) return;
        if (el.closest('[data-reveal]')) return;
        if (el.getBoundingClientRect().height === 0) return;
        el.setAttribute('data-reveal','');
        el.__floats = !!floater;
        picked.push(el);
      });
      picked.forEach(function(el, i){
        el.__delay = Math.min(i * 55, 480);
        el.__base = el.style.transition || '';
        /* WHICH PROPERTY MOVES IT, and why it is not one answer for everything.
           Normally `translate`, not `transform`: the hover rules use transform
           to lift, and the two would otherwise overwrite each other.
           But cdFloat is keyframed on `translate` too -- that is exactly why
           the export skipped floating elements entirely, and why the chip sat
           there at full opacity while the rest of the hero faded in. An
           animation beats an inline style on the property it animates, so a
           `translate` reveal on the chip would do nothing at all.
           `transform` is the way out: it is a separate property that composes
           with `translate` rather than replacing it, so the chip can slide in
           while it keeps bobbing, and it carries no hover rule to collide
           with. */
        el.__prop = el.__floats ? 'transform' : 'translate';
        /* HIDDEN NOW, TRANSITION LATER. Setting the hidden state and the
           transition in the same task is the bug that made the hero pop.
           A style change starts a transition based on the AFTER-change style,
           so `opacity:0` and `transition:...620ms` applied together do not
           snap to hidden -- they animate 1 -> 0 over 620ms after the delay.
           Above the fold the observer then fires ~30ms later and reverses it,
           so the element never leaves opacity 1 and there is no entrance at
           all. Below the fold nobody sees it, which is why this looked fine
           until the chip made it obvious. The transition is installed after a
           forced reflow instead; see below. */
        el.style.opacity = '0';
        el.style[el.__prop] = el.__floats ? 'translateY(-18px)' : '0 -18px';
        marked.push(el);
      });
    });

    /* The flush. Reading offsetHeight forces a style recalc, so opacity:0 is
       the settled "before" value by the time the transition exists and the
       observer can set opacity:1. One read for the whole page, not one per
       element -- doing it inside the loop would be N layouts. */
    void document.body.offsetHeight;
    marked.forEach(function(el){
      el.style.transition =
        'opacity 620ms cubic-bezier(.22,.61,.36,1) ' + el.__delay + 'ms,' +
        el.__prop + ' 720ms cubic-bezier(.22,.61,.36,1) ' + el.__delay + 'ms';
    });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        var el = e.target;
        el.style.opacity = '1';
        el.style[el.__prop] = el.__floats ? 'translateY(0)' : '0 0';
        io.unobserve(el);
        /* Hand the element back to the stylesheet once settled, so its hover
           transition is the authored one again, and so the floating box goes
           back to a bare `translate` with nothing stacked on top of it. */
        setTimeout(function(){
          el.style.opacity = '';
          el.style[el.__prop] = '';
          el.style.transition = el.__base;
          el.removeAttribute('data-reveal');
        }, 1400);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    marked.forEach(function(el){ io.observe(el); });
  }

  /* ---- the results carousel: autoplay, the two arrows, one card per swipe -- */
  var track = document.querySelector('#results [data-track]');
  if (track && track.firstElementChild) {
    var driving = false;                 /* true while WE are scrolling it */
    var from = 0;                        /* index the current gesture started at */
    var pitch = function(){
      return track.firstElementChild.getBoundingClientRect().width + 20; };
    var index = function(){ return Math.round(track.scrollLeft / pitch()); };
    var last = function(){ return track.children.length - 1; };
    var driveOff;
    var goTo = function(i){
      driving = true;
      /* Keep the paging origin in sync with where WE are sending it. Without
         this an arrow click scrolls from index 5 to 4, `driving` expires
         mid-glide, and the clamp below measures that motion against a stale
         `from` (still 0, because a click fires no pointerdown) and drags the
         track back to card 1. */
      from = i;
      track.scrollTo({ left: i * pitch(), behavior: 'smooth' });
      clearTimeout(driveOff);
      driveOff = setTimeout(function(){ driving = false; }, 900);
    };
    var step = function(dir){
      var i = index();
      if (dir > 0) goTo(i >= last() ? 0 : i + 1);
      else goTo(i <= 0 ? last() : i - 1);
    };
    var prev = document.querySelector('#results [aria-label="Previous"]');
    var next = document.querySelector('#results [aria-label="Next"]');
    if (prev) prev.addEventListener('click', function(){ step(-1); });
    if (next) next.addEventListener('click', function(){ step(1); });

    /* PAGING. scroll-snap-stop:always is the CSS answer to "one card per swipe"
       and it is not enough on its own: measured with a synthesized touch fling
       on the Blueprint page, a gentle swipe moved 1 card but a hard one coasted
       4. So the landing is clamped. The index before the gesture is recorded on
       touch/pointer down, and once scrolling settles anything further than one
       card away is pulled back to exactly one. Only while a card fills the
       track, i.e. the phone layout: a desktop track shows three at once and
       free scrolling there is correct. `driving` keeps the clamp from fighting
       our own smooth scrolls from the arrows and the autoplay. */
    var paged = window.matchMedia('(max-width:560px)');
    var settle;
    ['touchstart','pointerdown'].forEach(function(ev){
      track.addEventListener(ev, function(){ from = index(); }, {passive:true});
    });
    track.addEventListener('scroll', function(){
      if (driving || !paged.matches) return;
      clearTimeout(settle);
      settle = setTimeout(function(){
        var landed = index();
        var want = Math.max(0, Math.min(last(),
          Math.max(from - 1, Math.min(from + 1, landed))));
        if (want !== landed) goTo(want);
        from = want;
      }, 130);
    }, {passive:true});

    if (!reduce) {
      var timer = setInterval(function(){ step(1); }, 4200);
      /* Stop competing with the reader the moment they take over. */
      ['pointerdown','wheel','touchstart'].forEach(function(ev){
        track.addEventListener(ev, function(){ clearInterval(timer); },
          {passive:true, once:true});
      });
    }
  }
})();
