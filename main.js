/* ============================================================
   MAIN.JS — Nav, header, drawer, alert bar, smooth scroll,
   back-to-top, cookie banner, loader, contraste
   ============================================================ */

(() => {
  'use strict';

  const onReady = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  onReady(() => {
    /* ---- Page loader ---- */
    const loader = document.querySelector('.page-loader');
    if (loader) {
      window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('is-done'), 800);
      });
      // Failsafe
      setTimeout(() => loader.classList.add('is-done'), 2200);
    }

    /* ---- Header scroll state ---- */
    const header = document.querySelector('.site-header');
    if (header) {
      const updateHeader = () => {
        header.dataset.scrolled = window.scrollY > 30 ? 'true' : 'false';
      };
      updateHeader();
      window.addEventListener('scroll', updateHeader, { passive: true });
    }

    /* ---- Mobile drawer ---- */
    const navToggle = document.querySelector('.nav-toggle');
    const drawer = document.querySelector('.drawer');
    const drawerOverlay = document.querySelector('.drawer__overlay');
    const drawerClose = document.querySelector('.drawer__close');

    const openDrawer = () => {
      if (!drawer) return;
      drawer.dataset.open = 'true';
      drawerOverlay.dataset.open = 'true';
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const closeDrawer = () => {
      if (!drawer) return;
      drawer.dataset.open = 'false';
      drawerOverlay.dataset.open = 'false';
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    navToggle?.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      open ? closeDrawer() : openDrawer();
    });
    drawerOverlay?.addEventListener('click', closeDrawer);
    drawerClose?.addEventListener('click', closeDrawer);
    drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

    /* ---- Alert bar dismiss ---- */
    const alertBar = document.querySelector('.alert-bar');
    const alertClose = alertBar?.querySelector('.alert-bar__close');
    if (alertBar && localStorage.getItem('alertDismissed') === 'true') {
      alertBar.classList.add('is-dismissed');
    }
    alertClose?.addEventListener('click', () => {
      alertBar.classList.add('is-dismissed');
      localStorage.setItem('alertDismissed', 'true');
    });

    /* ---- Smooth scroll for in-page anchors ---- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });

    /* ---- Back to top with scroll progress ---- */
    const btt = document.querySelector('.back-to-top');
    const bttProgress = btt?.querySelector('.back-to-top__progress');
    const updateBtt = () => {
      if (!btt) return;
      const sc = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? sc / max : 0;
      btt.classList.toggle('is-visible', sc > 600);
      if (bttProgress) bttProgress.style.strokeDashoffset = String(154 * (1 - pct));
    };
    updateBtt();
    window.addEventListener('scroll', updateBtt, { passive: true });
    btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ---- Cookie banner ---- */
    const cookie = document.querySelector('.cookie-banner');
    if (cookie) {
      if (localStorage.getItem('cookieChoice')) {
        cookie.style.display = 'none';
      } else {
        setTimeout(() => cookie.classList.add('is-visible'), 1800);
      }
      cookie.querySelectorAll('[data-cookie-action]').forEach(b => {
        b.addEventListener('click', () => {
          localStorage.setItem('cookieChoice', b.dataset.cookieAction);
          cookie.classList.remove('is-visible');
          setTimeout(() => cookie.style.display = 'none', 500);
        });
      });
    }

    /* ---- High contrast toggle ---- */
    const hcToggle = document.querySelector('[data-toggle-contrast]');
    if (localStorage.getItem('highContrast') === 'true') {
      document.body.classList.add('high-contrast');
    }
    hcToggle?.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
    });

    /* ---- Ripple effect on .btn ---- */
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const rect = btn.getBoundingClientRect();
        const r = document.createElement('span');
        r.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        r.style.width = r.style.height = size + 'px';
        r.style.left = (e.clientX - rect.left - size/2) + 'px';
        r.style.top = (e.clientY - rect.top - size/2) + 'px';
        btn.appendChild(r);
        setTimeout(() => r.remove(), 600);
      });
    });
  });
})();
