/* =============================================================================
   Credit Danny — page script: transformations
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

  /* ---- the reveal, ported from the export's own observer ----
     This export's reveal is the TRANSIENT kind: the runtime marks elements,
     shows them on intersection and clears the marker afterwards. render.py
     therefore asserts nothing is left pending, unlike the About page where
     data-reveal is authored into the markup and never removed. */
  var SEL = 'h1,h2,h3,p,img,image-slot,a,li,div[style*="border-radius"]';
  var marked = [];
  if (!reduce && 'IntersectionObserver' in window) {
    document.querySelectorAll('section').forEach(function(sec){
      var picked = [];
      Array.prototype.forEach.call(sec.querySelectorAll(SEL), function(el){
        if (el.closest('[data-reveal]')) return;
        if (el.getBoundingClientRect().height === 0) return;
        el.setAttribute('data-reveal','');
        picked.push(el);
      });
      picked.forEach(function(el, i){ el.__delay = Math.min(i * 55, 420); });
      marked = marked.concat(picked);
    });
    marked.forEach(function(el){
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.willChange = 'opacity, transform';
    });
    /* HIDDEN NOW, TRANSITION LATER. A style change starts its transition from
       the AFTER value, so setting opacity:0 and the transition together
       animates 1 -> 0 rather than snapping hidden, and above the fold the
       observer reverses it a frame later so nothing ever animates in. One
       forced reflow settles the hidden state for the whole page. */
    void document.body.offsetHeight;
    marked.forEach(function(el){
      el.style.transition =
        'opacity .62s cubic-bezier(.22,.61,.36,1) ' + el.__delay + 'ms,' +
        'transform .72s cubic-bezier(.22,.61,.36,1) ' + el.__delay + 'ms';
    });
  }
  var pending = new Set(marked);
  var show = function(el){
    if (!pending.has(el)) return;
    pending.delete(el);
    el.style.opacity = '1';
    el.style.transform = 'none';
    io.unobserve(el);
    setTimeout(function(){
      el.style.opacity = ''; el.style.transform = '';
      el.style.transition = ''; el.style.willChange = '';
      el.removeAttribute('data-reveal');
    }, 1600);
  };
  var io = { unobserve: function(){} };
  if (marked.length) {
    io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting) show(e.target); });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.02 });
    marked.forEach(function(el){ io.observe(el); });

    /* The sweep. `top < h` with no lower bound: anything already scrolled past
       must be visible however far past it the reader now is, and a negative
       rootMargin means the last band of the document can never trigger the
       observer at all, because scrolling clamps at the bottom. */
    var ticking = false;
    var sweep = function(){
      ticking = false;
      if (!pending.size) return;
      var h = window.innerHeight, doc = document.scrollingElement;
      if (doc.scrollHeight - h - window.scrollY <= 4) Array.from(pending).forEach(show);
      Array.from(pending).forEach(function(el){
        if (el.getBoundingClientRect().top < h) show(el);
      });
    };
    var onScroll = function(){
      if (!ticking) { ticking = true; requestAnimationFrame(sweep); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    var ticks = 0;
    var t = setInterval(function(){
      sweep();
      if (!pending.size || ++ticks > 150) clearInterval(t);
    }, 200);
    sweep();
  }
})();
