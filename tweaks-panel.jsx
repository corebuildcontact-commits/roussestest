/* ============================================================
   ANIMATIONS.JS — Letter-by-letter, reveal on scroll, counters,
   parallax, particles, news card 3D tilt, curtain reveal
   ============================================================ */

(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onReady = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  onReady(() => {
    /* ---- Splitting-style letter animation ---- */
    document.querySelectorAll('[data-split]').forEach(el => {
      const words = el.textContent.split(/(\s+)/);
      el.textContent = '';
      let charIndex = 0;
      words.forEach(w => {
        if (/^\s+$/.test(w)) {
          el.appendChild(document.createTextNode(w));
          return;
        }
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        for (const ch of w) {
          const c = document.createElement('span');
          c.className = 'split-char';
          c.style.setProperty('--char-i', charIndex++);
          c.textContent = ch;
          wordSpan.appendChild(c);
        }
        el.appendChild(wordSpan);
      });
    });

    /* ---- Reveal on scroll ---- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    if (revealElements.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealElements.forEach(el => io.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }

    /* ---- Counters ---- */
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length && 'IntersectionObserver' in window) {
      const counterIO = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.count);
          const dur = parseInt(el.dataset.countDur || '1800', 10);
          const start = performance.now();
          const fmt = (v) => {
            const fixed = el.dataset.countDecimals ? parseInt(el.dataset.countDecimals, 10) : 0;
            const n = fixed ? v.toFixed(fixed) : Math.round(v);
            return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          };
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = fmt(target * eased);
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = fmt(target);
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      }, { threshold: 0.4 });
      counters.forEach(el => counterIO.observe(el));
    }

    /* ---- Hero particles (snow flakes) ---- */
    if (!reduced) {
      const particles = document.querySelector('.hero__particles');
      if (particles) {
        const N = window.innerWidth < 768 ? 18 : 36;
        for (let i = 0; i < N; i++) {
          const f = document.createElement('span');
          f.className = 'flake';
          const size = 2 + Math.random() * 5;
          f.style.width = f.style.height = size + 'px';
          f.style.left = (Math.random() * 100) + 'vw';
          f.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
          f.style.animationDuration = (8 + Math.random() * 12) + 's';
          f.style.animationDelay = (-Math.random() * 20) + 's';
          particles.appendChild(f);
        }
      }
    }

    /* ---- Parallax (data-parallax="0.3") ---- */
    if (!reduced) {
      const parallaxEls = document.querySelectorAll('[data-parallax]');
      if (parallaxEls.length) {
        let ticking = false;
        const update = () => {
          const sc = window.scrollY;
          parallaxEls.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.3;
            const rect = el.getBoundingClientRect();
            const offset = (rect.top + sc - window.innerHeight) * speed;
            el.style.transform = `translate3d(0, ${(sc - offset) * speed * -0.3}px, 0)`;
          });
          ticking = false;
        };
        window.addEventListener('scroll', () => {
          if (!ticking) { requestAnimationFrame(update); ticking = true; }
        }, { passive: true });
      }
    }

    /* ---- News card 3D tilt ---- */
    if (!reduced && window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('[data-tilt]').forEach(card => {
        const max = 6;
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    /* ---- Curtain reveal for discover cards ---- */
    document.querySelectorAll('.discover-card').forEach(c => c.classList.add('is-curtained'));
    if ('IntersectionObserver' in window) {
      const curtainIO = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.dataset.curtainIdx || '0', 10);
            setTimeout(() => e.target.classList.add('is-revealed'), idx * 120);
            curtainIO.unobserve(e.target);
          }
        });
      }, { threshold: 0.2 });
      document.querySelectorAll('.discover-card').forEach((c, i) => {
        c.dataset.curtainIdx = i;
        curtainIO.observe(c);
      });
    } else {
      document.querySelectorAll('.discover-card').forEach(c => c.classList.add('is-revealed'));
    }

    /* ---- Agenda rail keyboard nav ---- */
    document.querySelectorAll('.agenda-rail').forEach(rail => {
      rail.setAttribute('tabindex', '0');
      rail.setAttribute('role', 'region');
      rail.setAttribute('aria-label', 'Agenda — défiler horizontalement');
    });
  });
})();
