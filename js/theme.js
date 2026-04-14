/**
 * theme.js — Aerolab International
 * Handles light/dark mode toggle with localStorage persistence.
 * Reads saved preference as early as possible to prevent flash.
 */
(function () {
    // Apply saved theme immediately (before DOMContentLoaded) to avoid flash
    var saved = localStorage.getItem('aerolab-theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function updateButton(btn, theme) {
        if (!btn) return;
        if (theme === 'dark') {
            btn.setAttribute('aria-label', 'Switch to light mode');
            btn.classList.add('is-dark');
        } else {
            btn.setAttribute('aria-label', 'Switch to dark mode');
            btn.classList.remove('is-dark');
        }
    }

    // Update Safari/Chrome browser chrome color
    function updateThemeColor(theme) {
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute('content', theme === 'dark' ? '#0d0e1a' : '#000000');
        }
    }

    // Swap images that have a dark variant (data-dark-src attribute)
    function swapThemedImages(theme) {
        document.querySelectorAll('[data-dark-src]').forEach(function (img) {
            if (theme === 'dark') {
                if (!img.dataset.lightSrc) img.dataset.lightSrc = img.src;
                img.src = img.dataset.darkSrc;
            } else {
                if (img.dataset.lightSrc) img.src = img.dataset.lightSrc;
            }
        });
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('aerolab-theme', theme);
        updateButton(document.getElementById('theme-toggle'), theme);
        updateThemeColor(theme);
        swapThemedImages(theme);
    }

    function initToggle() {
        var btn = document.getElementById('theme-toggle');
        if (!btn || btn._themeInit) return;
        btn._themeInit = true;

        var current = document.documentElement.getAttribute('data-theme') || 'light';
        updateButton(btn, current);

        btn.addEventListener('click', function () {
            var now = document.documentElement.getAttribute('data-theme') || 'light';
            applyTheme(now === 'dark' ? 'light' : 'dark');
        });
    }

    // Nav is injected async via includes.js — wire up after nav:loaded
    document.addEventListener('nav:loaded', initToggle);

    // Fallback if nav was already in the DOM (e.g. no includes.js)
    document.addEventListener('DOMContentLoaded', function () {
        initToggle();
        // Apply themed images and browser chrome color on initial load
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        swapThemedImages(current);
        updateThemeColor(current);
    });
})();
