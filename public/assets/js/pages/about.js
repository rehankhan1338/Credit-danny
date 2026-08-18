/* =============================================================================
   Credit Danny — page script: about
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

  /* ---- the reveal, ported from the export's own observer ---- */
  var reveals = [].slice.call(document.querySelectorAll('[data-reveal]'));
  reveals.forEach(function(el){
    el.style.opacity = '0';
    el.style.transform = 'translateY(26px)';
  });
  void document.body.offsetHeight;   /* settle the hidden state BEFORE the
                                        transition exists, or it animates 1->0 */
  reveals.forEach(function(el){
    el.style.transition = 'opacity .7s cubic-bezier(.16,1,.3,1),' +
                          'transform .7s cubic-bezier(.16,1,.3,1)';
  });
  var pending = new Set(reveals);
  var show = function(el){
    if (!pending.has(el)) return;
    pending.delete(el);
    el.style.opacity = '1';
    el.style.transform = 'none';
    io.unobserve(el);
  };
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting) show(e.target); });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  reveals.forEach(function(el){ io.observe(el); });

  /* The sweep. `top < h` with no lower bound: anything already scrolled past
     must be visible, however far past it the reader now is. A -12% rootMargin
     also means the last band of the document can never trigger the observer,
     because scrollTo clamps at scrollHeight - innerHeight. */
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
})();
