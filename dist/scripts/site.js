(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Gentle reveal; content remains fully visible without JS via noscript fallback in build.
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // The site's one playful interaction: move across the reel image to scrub authentic stills.
  const scrub = document.querySelector('[data-reel-scrub]');
  if (scrub && !prefersReduced && window.matchMedia('(pointer:fine)').matches) {
    const image = scrub.querySelector('img');
    const frames = (scrub.dataset.frames || '').split(',').filter(Boolean);
    let active = -1;
    scrub.addEventListener('pointermove', (event) => {
      if (!frames.length) return;
      const rect = scrub.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(0.999, (event.clientX - rect.left) / rect.width));
      const idx = Math.floor(ratio * frames.length);
      if (idx !== active) {
        active = idx;
        image.src = frames[idx];
      }
    });
  }

  // Reel modal. Sources are injected only when the visitor asks to watch.
  const dialog = document.querySelector('#reel-dialog');
  if (dialog) {
    const video = dialog.querySelector('video');
    const close = dialog.querySelector('[data-reel-close]');
    const setSource = () => {
      if (video.dataset.loaded === 'true') return;
      const src = window.matchMedia('(max-width: 700px)').matches
        ? '/video/bryan-boyd-reel-mobile.mp4'
        : '/video/bryan-boyd-reel-web.mp4';
      video.src = src;
      video.dataset.loaded = 'true';
      video.load();
    };
    document.querySelectorAll('[data-reel-open]').forEach((button) => {
      button.addEventListener('click', () => {
        setSource();
        dialog.showModal();
        video.play().catch(() => {});
      });
    });
    const closeDialog = () => {
      video.pause();
      if (dialog.open) dialog.close();
    };
    close?.addEventListener('click', closeDialog);
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('cancel', () => video.pause());
  }

  // Index filters.
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const rows = [...document.querySelectorAll('[data-credit-row]')];
  const count = document.querySelector('[data-index-count]');
  const empty = document.querySelector('[data-index-empty]');
  if (filterButtons.length && rows.length) {
    const apply = (filter) => {
      let visible = 0;
      rows.forEach((row) => {
        const tags = (row.dataset.tags || '').split(' ');
        const show = filter === 'all' || tags.includes(filter);
        row.hidden = !show;
        if (show) visible += 1;
      });
      filterButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
      if (count) count.textContent = `${visible} ${visible === 1 ? 'entry' : 'entries'}`;
      if (empty) empty.style.display = visible ? 'none' : 'block';
      const url = new URL(window.location.href);
      if (filter === 'all') url.searchParams.delete('filter');
      else url.searchParams.set('filter', filter);
      history.replaceState(null, '', url);
    };
    filterButtons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.filter)));
    const requested = new URL(window.location.href).searchParams.get('filter');
    const valid = filterButtons.some((b) => b.dataset.filter === requested);
    apply(valid ? requested : 'all');
  }
})();
