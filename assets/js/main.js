/* =============================================================================
   Credit Danny — main.js
   -----------------------------------------------------------------------------
   Every site-wide behaviour, in plain ES5-compatible vanilla JavaScript.
   No jQuery, no Elementor, no Swiper, no build step.

   Each module is guarded by the presence of its own DOM hooks, so this one file
   is safe to load on every page: modules whose markup is absent simply do
   nothing. Page-specific scroll-reveal cascades live in assets/js/pages/*.js.

   Modules
     1.  prefersReducedMotion   shared motion preference
     2.  smartBar               retracting sticky header
     3.  fullScreenMenu         overlay nav + Esc + overlay click
     4.  smoothScroll           same-page anchor scrolling
     5.  modal                  accessible dialog (lead form)
     6.  lottiePlayers          [data-lottie] animation boxes
     7.  pannedSlots            [data-view] image crop arithmetic
     8.  playMarks              play overlay hides once its video starts
     9.  counters               [data-count] number count-up
     10. stickyStrip            mid-page floating CTA bar
     11. simpleReveal           class-toggle reveals
     12. heroSound              unmute hero video as soon as allowed

   Carousels and scroll-reveal cascades are deliberately NOT here: each page
   uses a materially different implementation (different paging maths, timings
   and easings), so they live in assets/js/pages/<page>.js and are loaded only
   by the page that needs them.
   ========================================================================== */
(function () {
  'use strict';

  /* -- 1. shared motion preference ---------------------------------------- */
  var reduce = !!(window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* Set this to true to make the Lottie animations loop for EVERYONE, ignoring
     the visitor's reduced-motion setting. Left false so the preference is
     honoured: those visitors get one play-through instead of an endless loop.
     (Per-animation override: data-lottie-motion="always" on the container.) */
  var LOTTIE_ALWAYS_LOOP = false;

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  };

  /* -- 2. the smart sticky header ------------------------------------------
     Fully visible at the top of the page; retracts on scroll down and returns
     on scroll up. The 6px deadband stops it flickering on the small deltas a
     trackpad produces at rest. Used by #top (most pages), #mv-topbar
     (mentorship) and #cd-topbar (mentorship/apply) — identical logic, so it is
     written once and applied to whichever bar the page actually has.          */
  function smartBar(bar) {
    if (!bar) return;
    var BASE = '0 4px 18px rgba(0,0,0,.45)';
    var DEEP = '0 10px 28px rgba(0,0,0,.55)';
    var last = window.scrollY, ticking = false;

    function update() {
      var y = window.scrollY, h = bar.offsetHeight;
      if (y <= 80) {
        bar.style.transform = 'translateY(0)';
        bar.style.boxShadow = BASE;
      } else {
        if (y > last + 6)      bar.style.transform = 'translateY(-' + (h + 2) + 'px)';
        else if (y < last - 6) bar.style.transform = 'translateY(0)';
        bar.style.boxShadow = DEEP;
      }
      last = y; ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    /* An open menu must not leave the bar retracted behind it. */
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('[data-menu-open]'))
        bar.style.transform = 'translateY(0)';
    });

    update();
  }

  /* -- 3. the full-screen menu ---------------------------------------------
     Openers are marked with [data-menu-open] rather than matched on
     href="#menu": the static export rewrote some of those hrefs to
     "<page>.html#menu", which silently killed the header's own opener on every
     page. The attribute cannot be rewritten by a crawler, so it cannot break
     the same way again.                                                       */
  function fullScreenMenu() {
    var panel = $('[data-menu-panel]');
    if (!panel) return;
    var root = document.documentElement;

    function open()  { root.classList.add('cd-menu-open'); }
    function close() { root.classList.remove('cd-menu-open'); }

    document.addEventListener('click', function (e) {
      var opener = e.target.closest && e.target.closest('[data-menu-open]');
      if (opener) { e.preventDefault(); open(); return; }

      var closer = e.target.closest && e.target.closest('[data-menu-close]');
      if (closer) { e.preventDefault(); close(); return; }

      /* Any link INSIDE the panel closes it: the nav is mostly same-page
         anchors, so without this the panel stays over the section it just
         jumped to. Clicking the backdrop (the panel itself) also closes. */
      if (panel.contains(e.target)) {
        if (e.target.closest('a,button')) close();
        else if (e.target === panel) close();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') close();
    });
  }

  /* -- 4. smooth scroll for same-page anchors -------------------------------
     Skips the menu opener and bare "#" links. Honours reduced motion.         */
  function smoothScroll() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href === '#' || href === '#menu') return;
      if (a.hasAttribute('data-menu-open')) return;

      var target;
      try { target = document.querySelector(href); } catch (err) { return; }
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      /* Keep the URL hash in step so the link is still shareable. */
      if (window.history && history.replaceState) history.replaceState(null, '', href);
    });
  }

  /* -- 5. modal -------------------------------------------------------------
     Replaces the Elementor popup module. Opened by [data-open-modal="<id>"],
     closed by its close button, a backdrop click, or Esc. Focus is moved into
     the dialog and restored to the opener on close.                           */
  function modal() {
    var dialogs = $$('[data-modal]');
    if (!dialogs.length) return;
    var lastFocus = null;

    function openModal(id) {
      var dlg = $('[data-modal="' + id + '"]');
      if (!dlg) return;
      lastFocus = document.activeElement;
      dlg.hidden = false;
      dlg.classList.add('is-open');
      document.documentElement.classList.add('cd-modal-open');
      var focusable = dlg.querySelector('button,[href],input,select,textarea,iframe,[tabindex]');
      if (focusable) focusable.focus();
    }

    function closeModal(dlg) {
      if (!dlg || dlg.hidden) return;
      dlg.classList.remove('is-open');
      dlg.hidden = true;
      document.documentElement.classList.remove('cd-modal-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function closeAll() { dialogs.forEach(closeModal); }

    document.addEventListener('click', function (e) {
      var opener = e.target.closest && e.target.closest('[data-open-modal]');
      if (opener) {
        e.preventDefault();
        openModal(opener.getAttribute('data-open-modal'));
        return;
      }
      var closer = e.target.closest && e.target.closest('[data-modal-close]');
      if (closer) { e.preventDefault(); closeModal(closer.closest('[data-modal]')); return; }
      /* Backdrop click: the dialog element itself, never its inner panel. */
      var dlg = e.target.closest && e.target.closest('[data-modal]');
      if (dlg && e.target === dlg) closeModal(dlg);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') closeAll();
    });
  }

  /* -- 6. lottie players ----------------------------------------------------
     lottie-web is loaded locally and deferred, so it may not be parsed yet when
     this runs. Poll briefly for it, then give up rather than spinning forever;
     the boxes then stay empty, which is what they already are.                */
  function lottiePlayers() {
    var boxes = $$('[data-lottie]');
    if (!boxes.length) return;

    function start() {
      boxes.forEach(function (el) {
        if (el.dataset.lottieStarted) return;
        el.dataset.lottieStarted = '1';

        /* REDUCED MOTION: PLAY ONCE, DO NOT LOOP.
           The original used autoplay:!reduce, which left all five animations
           frozen on frame 0 for anyone with reduced motion enabled — and on
           Windows that is simply Settings > Accessibility > Visual effects >
           Animation effects switched off, which is common. A frozen Lottie
           reads as a broken graphic, not as a respected preference. Playing
           through once shows the artwork and still avoids the indefinite
           repetition the preference is actually asking us to stop.
           data-lottie-motion="always" opts a specific animation back into
           looping regardless. */
        var force = LOTTIE_ALWAYS_LOOP ||
                    el.getAttribute('data-lottie-motion') === 'always';
        var calm  = reduce && !force;

        /* Fall back to 'meet': a null fit would produce the invalid
           preserveAspectRatio value "xMidYMid null". */
        var fit = el.getAttribute('data-lottie-fit') || 'meet';
        var src = el.getAttribute('data-lottie') || '';

        /* PREFER INLINE DATA OVER A FETCH.
           lottie-web's `path:` option pulls the JSON over XMLHttpRequest, which
           fails in two situations that look identical to a missing file:
             - file:// — every such document is an opaque origin, so the request
               is CORS-blocked before it is even sent;
             - a server that 404s the .json extension (classic IIS MIME map).
           assets/js/lottie-data.js carries the same animations as plain script
           data, which is subject to neither. `path:` stays as the fallback so
           the page still works if that file is absent. */
        var key = src.split('/').pop();
        var inline = window.CD_LOTTIE && window.CD_LOTTIE[key];

        var opts = {
          container: el,
          renderer: 'svg',
          loop: !calm,
          autoplay: true,
          rendererSettings: { preserveAspectRatio: 'xMidYMid ' + fit }
        };
        if (inline) opts.animationData = inline;
        else opts.path = src;

        var anim = window.lottie.loadAnimation(opts);

        /* Surface a bad path instead of failing silently to an empty box. */
        anim.addEventListener('data_failed', function () {
          console.error('[lottie] could not load', el.getAttribute('data-lottie'));
        });

        el.__lottie = anim;   /* handy handle for debugging in the console */
      });
    }

    if (window.lottie) { start(); return; }
    var n = 0, t = setInterval(function () {
      if (window.lottie) { start(); clearInterval(t); }
      else if (++n > 60) clearInterval(t);
    }, 100);
  }

  /* -- 8. panned image slots ------------------------------------------------
     The original component painted into a shadow root and positioned the image
     itself: it scaled to the cover baseline times the stored zoom, then put the
     image's CENTRE at ((50+x)%, (50+y)%) of the frame. object-position cannot
     express that — its percentages align a point of the image with the same
     point of the box, which inverts the pan — and the exact numbers depend on
     the frame's aspect ratio, which is responsive. So the arithmetic is re-run
     on load and on every resize. Anything not panned is plain object-fit:cover
     in the markup and never reaches this code.                                */
  function pannedSlots() {
    var panned = $$('img[data-view]');
    if (!panned.length) return;

    function layout() {
      panned.forEach(function (img) {
        /* A phone-only view value, when the stored desktop pan does not survive
           the shorter frame. Read on every layout pass, so rotating the device
           re-resolves it rather than keeping the first answer. */
        var attr = (window.matchMedia &&
                    window.matchMedia('(max-width:900px)').matches &&
                    img.getAttribute('data-view-m')) ||
                   img.getAttribute('data-view') || '';
        var v = attr.split(',').map(Number);
        var frame = img.parentElement;
        if (!frame) return;
        var fw = frame.clientWidth,  fh = frame.clientHeight;
        var iw = img.naturalWidth,   ih = img.naturalHeight;
        if (!fw || !fh || !iw || !ih) return;

        var k = Math.max(fw / iw, fh / ih) * (v[0] || 1);
        var w = iw * k / fw * 100, h = ih * k / fh * 100;

        /* Clamp the pan: the range on each axis is half the overflow past the
           frame edge. Without it a stored pan drags the image off the frame as
           soon as the frame's aspect ratio changes. */
        var mx = Math.max(0, (w / 100 - 1) * 50);
        var my = Math.max(0, (h / 100 - 1) * 50);
        var x = Math.max(-mx, Math.min(mx, v[1] || 0));
        var y = Math.max(-my, Math.min(my, v[2] || 0));

        img.style.objectFit = '';          /* the box IS the image now */
        img.style.width  = w + '%';
        img.style.height = h + '%';
        img.style.left = (50 + x) + '%';
        img.style.top  = (50 + y) + '%';
      });
    }

    /* Watch the frame, do not sample it once: a layout computed from a live box
       is only as right as the moment it was read. ResizeObserver fires for the
       initial box and for every reflow after. */
    /* Re-resolve when the phone breakpoint is crossed, so a rotation swaps
       between data-view and data-view-m. */
    if (window.matchMedia) {
      var mq = window.matchMedia('(max-width:900px)');
      if (mq.addEventListener) mq.addEventListener('change', layout);
      else if (mq.addListener) mq.addListener(layout);
    }
    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(layout);
      panned.forEach(function (img) { if (img.parentElement) ro.observe(img.parentElement); });
    }
    panned.forEach(function (img) {
      if (img.complete) layout();
      else img.addEventListener('load', layout, { once: true });
    });
    window.addEventListener('resize', layout);
    window.addEventListener('load', layout);
  }

  /* -- 9. play marks --------------------------------------------------------
     Each play overlay steps aside once its own video starts. Two ways in,
     because one of them is not ours to rely on: the player element dispatches
     its own play events, which is the correct signal, but it upgrades
     asynchronously from a CDN — if that never happens the mark must still get
     out of the way when the reader presses it. The overlay is
     pointer-events:none, so the press lands on the player either way.         */
  function playMarks() {
    $$('.cd-playmark, .ct-playmark').forEach(function (mark) {
      var frame = mark.parentElement;
      var player = frame && frame.querySelector('wistia-player, video');
      if (!player) return;
      var offClass = mark.classList.contains('ct-playmark') ? 'ct-off' : 'cd-off';
      var off = function () { mark.classList.add(offClass); };
      ['play', 'playing', 'wistia-play'].forEach(function (name) {
        player.addEventListener(name, off);
      });
      frame.addEventListener('pointerdown', off);
    });
  }

  /* -- 10. counters ---------------------------------------------------------
     Counts up to [data-count] when the figure scrolls into view. Under reduced
     motion the final figure is printed immediately.                           */
  function counters() {
    var els = $$('[data-count]');
    if (!els.length) return;

    function print(el, value) {
      el.textContent = Number(value).toLocaleString('en-US') +
        (el.getAttribute('data-suffix') || '');
    }

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { print(el, el.getAttribute('data-count')); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        io.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count')) || 0;
        var dur = 1400, t0 = null;
        function frame(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          /* easeOutCubic — fast start, gentle settle. */
          print(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.4 });

    els.forEach(function (el) {
      /* Start from zero, not from the captured final value: the static capture
         froze these at their end figures, so without this they never move. */
      print(el, 0);
      io.observe(el);
    });
  }

  /* -- 11. the smart bottom strip ------------------------------------------
     A floating CTA visible only in the middle of the page: past the hero, not
     yet at the closing CTA. Same logic on four pages, different class prefix.  */
  function stickyStrip(stripSel, startSel, endSel, onClass) {
    var strip = $(stripSel);
    if (!strip) return;
    var start = $(startSel), end = $(endSel);

    if (!('IntersectionObserver' in window) || !start || !end) {
      /* No way to know where we are, so fall back to always-on rather than
         leaving a CTA the reader can never reach. */
      strip.classList.add(onClass);
      return;
    }
    var startOn = true, endOn = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.target === start) startOn = e.isIntersecting;
        else if (e.target === end) endOn = e.isIntersecting;
      });
      strip.classList.toggle(onClass, !startOn && !endOn);
    }, { threshold: 0 });
    io.observe(start);
    io.observe(end);
  }

  /* -- 12. simple class-toggle reveal --------------------------------------
     For pages whose reveal is a plain CSS class flip. Falls back to showing
     everything at once when IntersectionObserver is unavailable or motion is
     reduced — invisible content is worse than a missed animation.             */
  function simpleReveal(sel, inClass, rootMargin, threshold) {
    var els = $$(sel);
    if (!els.length) return;

    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach(function (el) { el.classList.add(inClass); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add(inClass); io.unobserve(e.target); }
      });
    }, { rootMargin: rootMargin || '0px 0px -12% 0px', threshold: threshold || 0.08 });
    els.forEach(function (el) { io.observe(el); });

    /* Last-resort guard: anything still hidden once the page has settled is
       shown outright. */
    window.setTimeout(function () {
      els.forEach(function (el) { el.classList.add(inClass); });
    }, 8000);
  }

  /* -- 13. hero video sound -------------------------------------------------
     Unmuted autoplay cannot be forced: Chrome only permits it when the Media
     Engagement Index for this domain is high, and Safari/Firefox refuse by
     default. So start muted (which always plays), try for sound immediately,
     and if the browser refuses, unmute on the visitor's first gesture.        */
  function heroSound() {
    var p = $('wistia-player[data-hero-sound], [data-hero-sound] wistia-player');
    if (!p) return;
    var GESTURES = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll'];

    function withSound() {
      try {
        p.muted = false;
        if (p.paused && typeof p.play === 'function') p.play();
        return p.muted === false;
      } catch (e) { return false; }
    }
    function teardown() {
      GESTURES.forEach(function (ev) {
        window.removeEventListener(ev, onGesture, { capture: true });
      });
    }
    function onGesture() { if (withSound()) teardown(); }
    function arm() {
      if (withSound()) return;
      GESTURES.forEach(function (ev) {
        window.addEventListener(ev, onGesture, { capture: true, passive: true });
      });
    }

    if (window.customElements && customElements.whenDefined) {
      customElements.whenDefined('wistia-player').then(function () { setTimeout(arm, 400); });
    } else {
      setTimeout(arm, 1200);
    }
  }

  /* -- boot ----------------------------------------------------------------
     Every call is a no-op when its markup is absent, so the same sequence runs
     on every page.                                                            */
  function init() {
    smartBar(document.getElementById('top'));
    smartBar(document.getElementById('mv-topbar'));
    smartBar(document.getElementById('cd-topbar'));

    fullScreenMenu();
    smoothScroll();
    modal();
    lottiePlayers();
    pannedSlots();
    playMarks();
    counters();
    heroSound();

    stickyStrip('.ca-sticky', '#top',    '.ca-endcta', 'ca-on');
    stickyStrip('.sp-sticky', '#top',    '.sp-endcta', 'sp-on');
    stickyStrip('.bp-sticky', '#top',    '.bp-endcta', 'bp-on');
    stickyStrip('.hb-sticky', '#hb-top', '#apply',     'hb-on');

    simpleReveal('.pl-reveal', 'pl-in', '0px 0px -12% 0px', 0.08);
    simpleReveal('.hb-reveal', 'hb-in', '0px 0px -8% 0px',  0.05);
  }

  /* Expose the reduced-motion flag for the per-page reveal cascades. */
  window.CD = window.CD || {};
  window.CD.reduce = reduce;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
