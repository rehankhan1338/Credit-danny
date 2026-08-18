/* =============================================================================
   Credit Danny — page script: mentorship
   -----------------------------------------------------------------------------
   The mentorship page's scroll reveal. It uses a sweep rather than an
   IntersectionObserver: IO only fires when intersection CHANGES, so anything
   the viewport jumps over — an anchor link, a fast flick, or a restored scroll
   position — would never fire and would stay invisible permanently.

   Site-wide behaviour lives in assets/js/main.js, which must load first.
   ========================================================================== */
(function(){
  // No IntersectionObserver (or reduced motion) -> leave everything visible.
  if(!('IntersectionObserver' in window)) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var sections=[].slice.call(document.querySelectorAll('[data-screen-label]'));
  if(!sections.length) return;

  // Grids cascade by their own items; everything else by section content block.
  var GRIDS='.mv-stat4,.mv-stat5,.mv-grid4,.mv-included,.mv-bullets,.mv-grid2,.mv-narrative,.mv-bento';

  function blocksFor(section){
    // Unwrap single-child wrappers to reach the real content container.
    var el=section;
    while(el.children.length===1 && el.firstElementChild.children.length) el=el.firstElementChild;
    var out=[].slice.call(el.children);
    // Swap any grid for its items so cards cascade one by one.
    var expanded=[];
    out.forEach(function(node){
      var grid=node.matches&&node.matches(GRIDS)?node:(node.querySelector?node.querySelector(GRIDS):null);
      if(grid && grid.children.length>1){ expanded=expanded.concat([].slice.call(grid.children)); }
      else expanded.push(node);
    });
    return expanded.filter(function(n){
      // Skip decorative absolutely-positioned art and zero-size nodes.
      var cs=getComputedStyle(n);
      if(cs.position==='absolute'||cs.position==='fixed') return false;
      return n.getBoundingClientRect().height>0;
    });
  }

  var pending=[];
  sections.forEach(function(section,si){
    // The hero is above the fold; animating it would delay the headline.
    if(si===0) return;
    blocksFor(section).forEach(function(node,i){
      node.classList.add('cd-r');
      node.style.setProperty('--rd', Math.min(i,8));   // cap stagger so long grids
      pending.push(node);                               // don't crawl in
    });
  });

  /* A sweep, not an IntersectionObserver. IO only fires when intersection CHANGES,
     so anything the viewport jumps over -- anchor links (#mod-01), a fast flick, or
     a restored scroll position -- would never fire and stay invisible permanently.
     Checking "is it at or above the fold yet?" also catches everything already
     scrolled past, so content can never get stranded. */
  function sweep(){
    var limit=window.innerHeight*0.92, still=[];
    for(var i=0;i<pending.length;i++){
      var n=pending[i];
      if(n.getBoundingClientRect().top < limit) n.classList.add('is-in');
      else still.push(n);
    }
    pending=still;
    if(!pending.length){                     // everything shown: stop listening
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('resize',onScroll);
    }
  }

  var ticking=false;
  function onScroll(){
    if(ticking) return;
    ticking=true;
    window.requestAnimationFrame(function(){ sweep(); ticking=false; });
  }

  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  sweep();                                   // reveal whatever is already in view

  /* Last-resort guard: if anything is somehow still hidden after the page has
     settled, show it. Invisible content is worse than a missed animation. */
  window.setTimeout(function(){
    pending.forEach(function(n){ n.classList.add('is-in'); });
  }, 8000);
})();