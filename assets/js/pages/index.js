/* =============================================================================
   Credit Danny — page script: index
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
    var skip = function(el){
      var tag = el.tagName;
      if (tag === 'VIDEO' || tag === 'SCRIPT' || tag === 'STYLE') return true;
      if (el.getAttribute('aria-hidden') === 'true') return true;
      var pos = getComputedStyle(el).position;
      return pos === 'absolute' || pos === 'fixed' || pos === 'sticky';
    };
    var targets = [];
    document.querySelectorAll('section, footer').forEach(function(sec){
      if (sec.closest('[data-menu-panel]')) return;
      var kids = Array.prototype.filter.call(sec.children, function(k){
        return !skip(k);
      });
      if (kids.length === 1 && kids[0].children.length > 1) {
        var inner = Array.prototype.filter.call(kids[0].children, function(k){
          return !skip(k);
        });
        if (inner.length > 1) kids = inner;
      }
      kids.forEach(function(k, i){ targets.push([k, i]); });
    });
    targets.forEach(function(pair){
      var el = pair[0];
      el.__delay = Math.min(pair[1], 5) * 90;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.willChange = 'opacity, transform';
    });
    /* HIDDEN NOW, TRANSITION LATER. A style change starts its transition from
       the AFTER-change value, so setting opacity:0 and the transition in one
       task animates 1 -> 0 over 750ms instead of snapping to hidden. Above the
       fold the observer then reverses it a frame later and nothing ever
       animates in. One forced reflow for the whole page settles the hidden
       state first; doing it per element would be N layouts. */
    void document.body.offsetHeight;
    targets.forEach(function(pair){
      var el = pair[0];
      el.style.transition = 'opacity .75s cubic-bezier(.16,1,.3,1) ' + el.__delay
        + 'ms, transform .75s cubic-bezier(.16,1,.3,1) ' + el.__delay + 'ms';
    });
    var pending = new Set(targets.map(function(p){ return p[0]; }));
    var show = function(el){
      if (!pending.has(el)) return;
      pending.delete(el);
      el.style.opacity = '';
      el.style.transform = '';
      io.unobserve(el);
      setTimeout(function(){
        el.style.transition = ''; el.style.willChange = '';
      }, 1600);
    };
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting) show(e.target); });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function(p){ io.observe(p[0]); });
    /* Safety sweep. The observer misses elements the viewport leaps over, and
       -- measured on this export while capturing it -- it can never fire for
       the last 8% of the document, because rootMargin pulls the trigger line
       above a band that nothing can scroll past. The footer's fine print lives
       exactly there. */
    var ticking = false;
    var sweep = function(){
      ticking = false;
      if (!pending.size) return;
      var h = window.innerHeight;
      var doc = document.scrollingElement;
      /* AT THE BOTTOM, SHOW WHATEVER IS LEFT.
         rootMargin '0px 0px -8%' puts the observer's trigger line 8% of the
         viewport above its bottom edge, and the last 8% of a document can never
         rise above that line -- scrollTo clamps at scrollHeight - innerHeight.
         The sweep's own 0.98 threshold does not save it either: measured on
         this page, the footer's policy links sit at top 886 against a line at
         882 and stayed invisible after a full scroll to the end. Nothing below
         the fold is left to reveal once the reader is at the bottom, so the
         honest thing is to show it. */
      if (doc.scrollHeight - h - window.scrollY <= 4) {
        Array.from(pending).forEach(show);
      }
      /* `r.top < h` and NOTHING ELSE.
         Two changes from the export's `r.top < h * 0.98 && r.bottom > -h`:
         - 0.98 -> 1. Two percent of a 900px viewport is 18px, and the footer's
           policy links miss by four of them.
         - the lower bound is gone. `r.bottom > -h` excludes anything more than
           one viewport ABOVE the fold, which is precisely the case the sweep
           exists to catch: if the reader has scrolled past a block, it must be
           visible, however far past it they now are. Measured with the bound in
           place, a fast scroll to the end left between zero and five blocks
           permanently invisible, different ones each run. */
      Array.from(pending).forEach(function(el){
        if (el.getBoundingClientRect().top < h) show(el);
      });
      if (!pending.size) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };
    var onScroll = function(){
      if (!ticking) { ticking = true; requestAnimationFrame(sweep); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    /* A TICK, not just scroll events. The page keeps growing under the reveal
       -- images decode, the reviews widget arrives -- so an element can move
       into view between two scroll events and never be measured. Polling while
       anything is still pending closes that race; it stops the moment the last
       block is shown, and gives up after 30s so it cannot run forever. */
    var ticks = 0;
    var tick = setInterval(function(){
      sweep();
      if (!pending.size || ++ticks > 150) clearInterval(tick);
    }, 200);
    sweep();
  }

  /* ---- the results carousel: autoplay, two arrows, one card per swipe ---- */
  var track = document.querySelector('[data-track="results"]');
  if (track && track.firstElementChild) {
    var driving = false;
    var pitch = function(){
      var a = track.children[0], b = track.children[1];
      if (!b) return a.getBoundingClientRect().width;
      return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
    };
    var step = function(dir){
      var p = pitch();
      var max = track.scrollWidth - track.clientWidth;
      var to = track.scrollLeft + dir * p;
      /* Wrap at both ends rather than stalling against the edge: the export
         restarted from 0 at the end, and an autoplay that silently stops
         looks broken. */
      if (to > max + 2) to = 0;
      else if (to < -2) to = max;
      driving = true;
      track.scrollTo({ left: to, behavior: reduce ? 'auto' : 'smooth' });
      setTimeout(function(){ driving = false; }, 700);
    };
    var timer = null;
    var play = function(){
      clearInterval(timer);
      if (!reduce) timer = setInterval(function(){ step(1); }, 3800);
    };
    var pause = function(){ clearInterval(timer); };
    document.querySelectorAll('[aria-label="Previous"]').forEach(function(b){
      b.addEventListener('click', function(){ pause(); step(-1); play(); });
    });
    document.querySelectorAll('[aria-label="Next"]').forEach(function(b){
      b.addEventListener('click', function(){ pause(); step(1); play(); });
    });
    /* Autoplay yields to the reader: hovering or touching the rail stops it,
       and it only resumes once they leave. */
    track.addEventListener('pointerenter', pause);
    track.addEventListener('pointerleave', play);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('scroll', function(){
      if (driving) return;
      pause();
      clearTimeout(track.__idle);
      track.__idle = setTimeout(play, 2600);
    }, { passive: true });
    play();
  }
})();
