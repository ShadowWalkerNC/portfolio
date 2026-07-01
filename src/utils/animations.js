/**
 * animations.js — ShadowWalker Portfolio
 * Scroll-reveal, badge stagger, typewriter, and orb tilt helpers.
 * Import and call initAnimations() from your layout's <script> tag.
 */

/* ============================================================
   SCROLL REVEAL
   Watches .reveal, .reveal-left, .reveal-right elements and
   adds .revealed when they enter the viewport.
   ============================================================ */

export function initScrollReveal(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -48px 0px',
    once = true,
  } = options;

  const targets = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        if (once) observer.unobserve(entry.target);
      });
    },
    { threshold, rootMargin }
  );

  targets.forEach((el) => observer.observe(el));

  return observer; // expose for manual teardown if needed
}


/* ============================================================
   STAGGER DELAY INJECTION
   Call on a parent container; injects --stagger-i CSS var and
   auto-applies animation-delay to direct children.

   Usage:
     initStagger('.skills-grid', { base: 0.05, unit: 's' })
   ============================================================ */

export function initStagger(selector, options = {}) {
  const { base = 0.06, unit = 's', animClass = '' } = options;
  const containers = document.querySelectorAll(selector);

  containers.forEach((container) => {
    [...container.children].forEach((child, i) => {
      child.style.animationDelay = `${(i * base).toFixed(2)}${unit}`;
      if (animClass) child.classList.add(animClass);
    });
  });
}


/* ============================================================
   TYPEWRITER (JS-driven, multi-string)
   Cycles through an array of strings with a blinking cursor.

   Usage:
     initTypewriter('#hero-role', [
       'Full-Stack Developer',
       'Culinary Creator',
       'Problem Solver',
     ])
   ============================================================ */

export function initTypewriter(selector, strings = [], options = {}) {
  const el = document.querySelector(selector);
  if (!el || !strings.length) return;

  const {
    typeSpeed   = 60,   // ms per character
    deleteSpeed = 35,   // ms per character
    pauseAfter  = 1800, // ms to hold completed string
    pauseBefore = 400,  // ms before typing next string
    cursor      = true,
    loop        = true,
  } = options;

  if (cursor) {
    el.style.borderRight = '2px solid var(--accent-blue)';
    el.style.paddingRight = '2px';
    // blink via CSS class
    el.classList.add('tw-cursor');
  }

  let strIndex  = 0;
  let charIndex = 0;
  let deleting  = false;

  // Inject minimal blink style once
  if (cursor && !document.getElementById('tw-cursor-style')) {
    const style = document.createElement('style');
    style.id = 'tw-cursor-style';
    style.textContent = `
      .tw-cursor { animation: caretBlink 0.75s step-end infinite; }
    `;
    document.head.appendChild(style);
  }

  function tick() {
    const current = strings[strIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, pauseAfter);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        strIndex = loop ? (strIndex + 1) % strings.length : strIndex + 1;
        if (!loop && strIndex >= strings.length) return; // stop
        setTimeout(tick, pauseBefore);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  setTimeout(tick, pauseBefore);
}


/* ============================================================
   ORB PARALLAX (subtle mouse-tracking tilt on hero orbs)
   Adds a gentle depth feel without being distracting.

   Usage:
     initOrbParallax('.orb-container')
   ============================================================ */

export function initOrbParallax(containerSelector = '.orb-container', strength = 0.018) {
  const containers = document.querySelectorAll(containerSelector);
  if (!containers.length) return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let rafId = null;
  let mx = 0, my = 0;

  document.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2; // -1 to +1
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function frame() {
    containers.forEach((container) => {
      const orbs = container.querySelectorAll('.orb');
      orbs.forEach((orb, i) => {
        const depth = (i % 2 === 0 ? 1 : -1) * strength * (i + 1) * 30;
        orb.style.transform = `translate(${mx * depth}px, ${my * depth}px)`;
      });
    });
    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  // Return cleanup
  return () => cancelAnimationFrame(rafId);
}


/* ============================================================
   BADGE POP-IN
   Animates .badge or any selector with badgePop keyframe
   when they enter the viewport.

   Usage:
     initBadgePop('.badge-strip img')
   ============================================================ */

export function initBadgePop(selector = '.badge, .badge-strip img') {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate-badge-pop');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${(i * 0.04).toFixed(2)}s`;
    observer.observe(el);
  });
}


/* ============================================================
   CARD TILT (3-D micro-tilt on hover)
   Lightweight perspective tilt — no library needed.

   Usage:
     initCardTilt('.card')
   ============================================================ */

export function initCardTilt(selector = '.card', options = {}) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const { maxTilt = 6, scale = 1.02, glare = false } = options;
  const cards = document.querySelectorAll(selector);

  cards.forEach((card) => {
    card.style.transition = 'transform 0.15s ease, box-shadow 0.15s ease';
    card.style.willChange = 'transform';

    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const rotX  = (-dy * maxTilt).toFixed(2);
      const rotY  = ( dx * maxTilt).toFixed(2);
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}


/* ============================================================
   MASTER INIT
   Call once from your layout — wires everything up.
   ============================================================ */

export function initAnimations(options = {}) {
  const {
    scrollReveal  = true,
    badgePop      = true,
    cardTilt      = false,     // opt-in; can be noisy on touch
    orbParallax   = false,     // opt-in; hero pages only
    typewriter    = null,      // { selector, strings, ...opts } or null
    stagger       = null,      // { selector, ...opts } or null
  } = options;

  if (scrollReveal)  initScrollReveal();
  if (badgePop)      initBadgePop();
  if (cardTilt)      initCardTilt('.card');
  if (orbParallax)   initOrbParallax();
  if (typewriter)    initTypewriter(typewriter.selector, typewriter.strings, typewriter);
  if (stagger)       initStagger(stagger.selector, stagger);
}
