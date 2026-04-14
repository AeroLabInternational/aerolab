// Language Switcher with Translation
// The langSwitcher lives in the nav partial injected async by includes.js.
// We wire it up once that partial is ready.
function initLangSwitcher() {
    const langSwitcher = document.getElementById('langSwitcher');
    if (!langSwitcher) return;

    const translations = {
        en: typeof englishTranslations !== 'undefined' ? englishTranslations : {},
        ja: {}
    };
    const supportedLangs = ['en', 'ja'];

    function translatePage(lang) {
        const elementsToTranslate = document.querySelectorAll(`
            [data-translate], h1, h2, h3, h4, h5, h6, p, a.btn,
            .section-subtitle, .search-input,
            .info-item-label, .info-item-value,
            .spec-label, .spec-value,
            .cost-label, .cost-value,
            .tab-btn, .section-title,
            label, span:not(.search-results span):not(.search-result-item span),
            .chart-title, td, th, li:not(.search-results li),
            button:not(.tab-btn)
        `);

        elementsToTranslate.forEach(element => {
            if (element.closest('.search-results') ||
                element.closest('.search-result-item') ||
                element.closest('#airportSuggestions') ||
                element.closest('.language-switcher') ||
                element.closest('.nav-list-card') ||
                element.closest('footer')) {
                return;
            }

            const hasOnlyChildren = element.children.length > 0 &&
                                   Array.from(element.childNodes).every(node =>
                                       node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()
                                   );
            if (hasOnlyChildren) return;

            const originalText = element.getAttribute('data-original') || element.textContent.trim();

            if (!originalText || originalText.length < 2) return;

            // Skip elements with mixed content (both element children like <br>/<a>
            // and direct text nodes) when no explicit translation exists.
            // This preserves structural markup and prevents <br> tags being stripped out.
            const hasMixedContent = element.children.length > 0 &&
                                    Array.from(element.childNodes).some(node =>
                                        node.nodeType === Node.TEXT_NODE && node.textContent.trim()
                                    );
            const hasTranslation = (lang === 'en' && translations.en[originalText]) ||
                                   (lang === 'ja' && translations.ja[originalText]);
            if (hasMixedContent && !hasTranslation) return;

            if (!element.getAttribute('data-original')) {
                element.setAttribute('data-original', originalText);
            }

            const translation =
                (lang === 'en' && translations.en[originalText])
                    ? translations.en[originalText]
                    : (lang === 'ja' && translations.ja[originalText])
                        ? translations.ja[originalText]
                        : originalText;

            if (element.tagName === 'INPUT') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        translateNavLinks(lang);
    }

    function translateNavLinks(lang) {
        document.querySelectorAll('.nav-list-card a h2').forEach(function(h2) {
            var textNode = null;
            for (var i = 0; i < h2.childNodes.length; i++) {
                var n = h2.childNodes[i];
                if (n.nodeType === Node.TEXT_NODE && n.textContent.trim()) {
                    textNode = n;
                    break;
                }
            }
            var span = h2.querySelector('span');
            if (!textNode || !span) return;

            if (!h2.dataset.jaText) {
                h2.dataset.jaText = textNode.textContent.trim();
                h2.dataset.enText = span.textContent.trim()
                    .replace(/^-\s*/, '').replace(/\s*-$/, '').trim();
            }

            if (lang === 'en') {
                textNode.textContent = '\n                                ' + h2.dataset.enText + '\n                                ';
                span.textContent = h2.dataset.jaText;
            } else {
                textNode.textContent = '\n                                ' + h2.dataset.jaText + '\n                                ';
                span.textContent = '- ' + h2.dataset.enText + ' -';
            }
        });
    }

    function ensureLanguageOptionLabels() {
        const enOption = langSwitcher.querySelector('option[value="en"]');
        if (enOption) enOption.textContent = '🇺🇸 English';
        const jaOption = langSwitcher.querySelector('option[value="ja"]');
        if (jaOption) jaOption.textContent = '🇯🇵 日本語';
    }

    function applyLanguage(lang) {
        const normalizedLang = supportedLangs.includes(lang) ? lang : 'ja';
        document.documentElement.setAttribute('lang', normalizedLang);
        translatePage(normalizedLang);
        ensureLanguageOptionLabels();
        try {
            localStorage.setItem('preferredLang', normalizedLang);
        } catch (error) {
            console.warn('Unable to persist language preference.', error);
        }
    }

    const storedLang = (() => {
        try {
            return localStorage.getItem('preferredLang');
        } catch (error) {
            return null;
        }
    })();
    const initialLang = supportedLangs.includes(storedLang) ? storedLang : 'ja';
    langSwitcher.value = initialLang;
    applyLanguage(initialLang);

    langSwitcher.addEventListener('change', function() {
        applyLanguage(this.value);
    });
}

document.addEventListener('nav:loaded', initLangSwitcher);
// Fallback: if nav was somehow already present (e.g. cached) also try on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('langSwitcher')) initLangSwitcher();
});
