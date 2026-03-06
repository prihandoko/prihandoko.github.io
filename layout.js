/**
 * layout.js — Not a Note
 * Injects shared header, footer, theme toggle, and base CSS into every page.
 *
 * HOW TO ADD A NEW PAGE:
 * 1. Copy page-template.html → your-page.html
 * 2. Add your page to NAV_LINKS below
 * 3. Write your content inside <main>
 * That's it. Header, footer, theme, and styles are all handled here.
 */

// ─── SITE CONFIG ──────────────────────────────────────────────────────────────
const SITE = {
  name:      'Not a Note',
  author:    'Rudi Prihandoko',
  year:      2025,
  baseUrl:   'https://rud72k.github.io',  // update when deploying

  // ── NAV LINKS ──────────────────────────────────────────────────────────────
  // To add a page to the nav: { href, label, icon (optional FA class) }
  nav: [
    { href: 'writing.html', label: 'Writing'                              },
    { href: 'about.html',   label: 'About'                                },
    { href: 'feed.xml',     label: '', icon: 'fa-solid fa-rss', title: 'RSS Feed' },
  ],

  // ── FOOTER SOCIAL LINKS ────────────────────────────────────────────────────
  social: [
    { href: 'https://instagram.com/prihandokorudi', icon: 'fa-brands fa-instagram', title: 'Instagram'  },
    { href: 'https://threads.com/prihandokorudi',   icon: 'fa-brands fa-threads',   title: 'Threads'    },
    { href: 'https://x.com/prihandokorudi',         icon: 'fa-brands fa-x-twitter', title: 'X / Twitter'},
    { href: 'https://github.com/rud72k',            icon: 'fa-brands fa-github',    title: 'GitHub'     },
  ],
};

// ─── SHARED CSS ───────────────────────────────────────────────────────────────
const SHARED_CSS = `
  :root, [data-theme="light"] {
    --bg: #ffffff; --surface: #f9f9f9; --ink: #242424; --muted: #6b6b6b;
    --border: #e8e8e8; --tag-bg: #f2f2f2; --hover: #fafafa;
    --header-bg: rgba(255,255,255,0.92);
    --avatar-bg: #242424; --avatar-fg: #ffffff;
    --search-bg: #f5f5f5;
    --tag-active-bg: #242424; --tag-active-fg: #ffffff;
  }
  [data-theme="dark"] {
    --bg: #101010; --surface: #1a1a1a; --ink: #f0f0f0; --muted: #777777;
    --border: #2a2a2a; --tag-bg: #222222; --hover: #1c1c1c;
    --header-bg: rgba(16,16,16,0.92);
    --avatar-bg: #f0f0f0; --avatar-fg: #101010;
    --search-bg: #1a1a1a;
    --tag-active-bg: #f0f0f0; --tag-active-fg: #101010;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg); color: var(--ink);
    font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 300;
    min-height: 100vh; transition: background 0.25s, color 0.25s;
  }

  /* NAV */
  .nan-header {
    position: sticky; top: 0; background: var(--header-bg);
    backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);
    z-index: 50; transition: background 0.25s, border-color 0.25s;
  }
  .nan-header-inner {
    max-width: var(--max-w, 680px); margin: 0 auto; padding: 1rem 1.5rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  .nan-site-name {
    font-family: 'Source Serif 4', serif; font-size: 1.1rem; font-weight: 500;
    letter-spacing: -0.01em; color: var(--ink); text-decoration: none;
  }
  .nan-nav { display: flex; gap: 1.5rem; align-items: center; }
  .nan-nav a {
    font-size: 0.82rem; color: var(--muted); text-decoration: none; transition: color 0.2s;
  }
  .nan-nav a:hover, .nan-nav a.active { color: var(--ink); }

  /* FOOTER */
  .nan-footer { border-top: 1px solid var(--border); padding: 1.5rem; transition: border-color 0.25s; }
  .nan-footer-inner {
    max-width: var(--max-w, 680px); margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;
  }
  .nan-elsewhere { display: flex; align-items: center; gap: 0.25rem; }
  .nan-elsewhere-label { font-size: 0.75rem; color: var(--muted); margin-right: 0.5rem; }
  .nan-elsewhere a {
    color: var(--muted); font-size: 1rem; text-decoration: none;
    width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
    border-radius: 50%; transition: color 0.2s;
  }
  .nan-elsewhere a:hover { color: var(--ink); }
  .nan-footer-copy { font-size: 0.75rem; color: var(--muted); }

  /* FAB */
  .nan-fab-stack {
    position: fixed; bottom: 1.5rem; right: 1.5rem;
    display: flex; flex-direction: column; gap: 0.6rem; align-items: center; z-index: 200;
  }
  .nan-fab {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--surface); border: 1px solid var(--border);
    color: var(--muted); font-size: 0.88rem;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all 0.25s; box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  }
  .nan-fab:hover { color: var(--ink); border-color: var(--ink); }
`;

// ─── INJECT SHARED CSS + FONTS (runs immediately, before body exists) ─────────
(function injectHeadAssets() {
  // Shared CSS
  const style = document.createElement('style');
  style.textContent = SHARED_CSS;
  document.head.appendChild(style);

  // Google Fonts
  if (!document.querySelector('link[href*="googleapis"]')) {
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap';
    document.head.appendChild(fonts);
  }

  // Font Awesome
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(fa);
  }
})();

// ─── APPLY SAVED THEME IMMEDIATELY (prevents flash on load) ───────────────────
// Runs before DOMContentLoaded — just sets the attribute, no DOM manipulation
(function applyThemeEarly() {
  const saved = localStorage.getItem('nan-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

// ─── INJECT DOM ELEMENTS (waits for body to be ready) ─────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // ── HEADER ────────────────────────────────────────────────────────────────
  const current = window.location.pathname.split('/').pop() || 'index.html';

  const links = SITE.nav.map(({ href, label, icon, title }) => {
    const isActive  = current === href ? ' class="active"' : '';
    const titleAttr = title ? ` title="${title}"` : '';
    const content   = icon ? `<i class="${icon}"></i>${label}` : label;
    return `<a href="${href}"${isActive}${titleAttr}>${content}</a>`;
  }).join('');

  const header = document.createElement('header');
  header.className = 'nan-header';
  header.innerHTML = `
    <div class="nan-header-inner">
      <a class="nan-site-name" href="index.html">${SITE.name}</a>
      <nav class="nan-nav">${links}</nav>
    </div>`;

  const main = document.querySelector('main') || document.body.firstChild;
  document.body.insertBefore(header, main);

  // ── FOOTER ────────────────────────────────────────────────────────────────
  const socialLinks = SITE.social.map(({ href, icon, title }) =>
    `<a href="${href}" target="_blank" rel="noopener" title="${title}"><i class="${icon}"></i></a>`
  ).join('');

  const footer = document.createElement('footer');
  footer.className = 'nan-footer';
  footer.innerHTML = `
    <div class="nan-footer-inner">
      <div class="nan-elsewhere">
        <span class="nan-elsewhere-label">Elsewhere</span>
        ${socialLinks}
      </div>
      <span class="nan-footer-copy">&copy; ${SITE.year} ${SITE.author}</span>
    </div>`;
  document.body.appendChild(footer);

  // ── THEME TOGGLE ──────────────────────────────────────────────────────────
  const fab = document.createElement('div');
  fab.className = 'nan-fab-stack';
  fab.innerHTML = `<button class="nan-fab" id="nan-theme-toggle" title="Toggle light / dark"></button>`;
  document.body.appendChild(fab);

  const btn = document.getElementById('nan-theme-toggle');

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    btn.innerHTML = t === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('nan-theme', t);
    document.dispatchEvent(new CustomEvent('nan-theme-change', { detail: t }));
  }

  btn.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // Sync button icon with already-applied theme (set by applyThemeEarly above)
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  btn.innerHTML = currentTheme === 'dark'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  // Expose globally
  window.NAN = window.NAN || {};
  window.NAN.applyTheme = applyTheme;

});
