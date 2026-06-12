/* ─── Shared theme controller (SEM prototype) ──────────────────────────
   Drop-in for any page:
     1. Load it in <head> WITHOUT defer (so it runs before first paint,
        avoiding a dark→light flash):
          <script src="theme.js"></script>
     2. Add one or more toggle controls anywhere in the body:
          <button data-theme-toggle aria-pressed="false"
                  aria-label="Switch to light theme">
            <i class="ph ph-sun"></i>
          </button>

   The script sets data-theme="light" on <html> (dark is the default,
   i.e. no attribute), persists the choice in localStorage, falls back
   to the OS preference on first visit, and keeps every toggle's glyph
   (ph-sun / ph-moon) and aria state in sync. */
(function () {
  'use strict';

  var STORAGE_KEY = 'sem-theme';

  function preferred() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
      ? 'light' : 'dark';
  }

  function apply(theme) {
    var light = theme === 'light';
    var root = document.documentElement;
    if (light) root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');

    var toggles = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < toggles.length; i++) {
      var btn = toggles[i];
      btn.setAttribute('aria-pressed', String(light));
      btn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
      var glyph = btn.querySelector('i');
      if (glyph) {
        glyph.classList.toggle('ph-moon', light);
        glyph.classList.toggle('ph-sun', !light);
      }
    }
  }

  function toggle() {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  }

  /* 1) Pre-paint: set the attribute synchronously. Because this file is
        loaded in <head> before <body>, this runs before first paint, so
        the correct theme is already in place — no FOUC. (Toggle controls
        don't exist yet here; they're synced in step 2.) */
  apply(preferred());

  /* 2) Wire the toggle controls and re-sync their glyphs once parsed. */
  function wire() {
    var toggles = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', toggle);
    }
    apply(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }

  /* Exposed for any page that wants to drive the theme programmatically. */
  window.SemTheme = { apply: apply, toggle: toggle, preferred: preferred };
})();
