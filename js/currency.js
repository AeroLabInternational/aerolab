// Shared currency switching logic for cost pages
(function() {
    function getCurrentLang() {
        return document.documentElement.getAttribute('lang') || 'ja';
    }

    function formatUpdatedTime(date) {
        if (!date) return '';
        var lang = getCurrentLang();
        var h = date.getHours().toString().padStart(2, '0');
        var m = date.getMinutes().toString().padStart(2, '0');
        var time = h + ':' + m;
        return lang === 'en' ? 'Updated ' + time : '更新済み ' + time;
    }

    function getFetchingText() {
        return getCurrentLang() === 'en' ? 'Fetching live rate...' : '為替レートを取得中...';
    }

    function getRateUnavailableText() {
        return getCurrentLang() === 'en' ? 'Rate unavailable, using last known value.' : 'レートを取得できませんでした。最終既知の値を使用します。';
    }

    function setCurrencyConfig(currency, rate) {
        if (currency === 'JPY') {
            window.currencyConfig = {
                rate: rate,
                symbol: '¥',
                format: function(value) {
                    return '¥' + Math.round(value).toLocaleString('ja-JP');
                }
            };
        } else {
            window.currencyConfig = {
                rate: 1,
                symbol: '$',
                format: function(value) {
                    return '$' + Math.round(value).toLocaleString('en-US');
                }
            };
        }
    }

    function fetchRateFrom(url, extractor) {
        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Rate request failed');
                }
                return response.json();
            })
            .then(function(data) {
                var rate = extractor(data);
                if (!rate || !Number.isFinite(rate)) {
                    throw new Error('Exchange rate unavailable');
                }
                return rate;
            });
    }

    function fetchUsdToJpyRate() {
        return fetchRateFrom(
            'https://api.exchangerate.host/latest?base=USD&symbols=JPY',
            function(data) { return data && data.rates ? data.rates.JPY : null; }
        )
            .catch(function() {
                return fetchRateFrom(
                    'https://open.er-api.com/v6/latest/USD',
                    function(data) { return data && data.rates ? data.rates.JPY : null; }
                );
            })
            .catch(function() {
                return fetchRateFrom(
                    'https://api.frankfurter.app/latest?from=USD&to=JPY',
                    function(data) { return data && data.rates ? data.rates.JPY : null; }
                );
            });
    }

    function updateCostTables(costContainerSelector) {
        var selector = costContainerSelector || '#cost';
        var costValues = document.querySelectorAll(selector + ' .cost-value');
        costValues.forEach(function(valueEl) {
            var baseValue = Number(valueEl.dataset.usd || 0);
            if (window.currencyConfig && window.currencyConfig.format) {
                valueEl.textContent = window.currencyConfig.format(baseValue * window.currencyConfig.rate);
            }
        });
    }

    function updateCostCharts(costCharts) {
        if (costCharts && costCharts.variableChart && costCharts.variableChart._baseData) {
            costCharts.variableChart.data.datasets[0].data = costCharts.variableChart._baseData.map(function(value) {
                return value * window.currencyConfig.rate;
            });
            costCharts.variableChart.update();
        }

        if (costCharts && costCharts.fixedChart && costCharts.fixedChart._baseData) {
            costCharts.fixedChart.data.datasets[0].data = costCharts.fixedChart._baseData.map(function(value) {
                return value * window.currencyConfig.rate;
            });
            costCharts.fixedChart.update();
        }
    }

    function cacheUsdValues(costContainerSelector) {
        var selector = costContainerSelector || '#cost';
        var costValues = document.querySelectorAll(selector + ' .cost-value');
        costValues.forEach(function(valueEl) {
            if (!valueEl.dataset.usd) {
                var parsed = Number(valueEl.textContent.replace(/[^0-9.-]/g, ''));
                valueEl.dataset.usd = Number.isFinite(parsed) ? parsed : '0';
            }
        });
    }

    function initCurrencyControls(options) {
        var opts = options || {};
        var currencySelect = document.getElementById(opts.currencySelectId || 'currencySelect');
        var refreshRateButton = document.getElementById(opts.refreshButtonId || 'refreshRate');
        var currencyRateLabel = document.getElementById(opts.currencyRateId || 'currencyRate');
        var currencyUpdatedLabel = document.getElementById(opts.currencyUpdatedId || 'currencyUpdated');
        var lastUsdToJpyRate = Number(localStorage.getItem('usdToJpyRate')) || 1;

        function setRateDisplay(rate) {
            if (currencyRateLabel) {
                currencyRateLabel.textContent = '1 USD = ' + rate.toLocaleString('en-US') + ' JPY';
            }
        }

        function setRateStatus(message) {
            if (currencyUpdatedLabel) {
                currencyUpdatedLabel.textContent = message;
            }
        }

        function applyCurrency(currency, rate) {
            setCurrencyConfig(currency, rate);
            updateCostTables(opts.costContainerSelector);
            if (typeof opts.updateCostCalculator === 'function') {
                opts.updateCostCalculator();
            }
            updateCostCharts(opts.costCharts);
        }

        function syncCurrency() {
            if (!currencySelect || !currencyRateLabel) {
                return;
            }

            cacheUsdValues(opts.costContainerSelector);

            if (currencySelect.value === 'JPY') {
                setRateStatus(getFetchingText());
                fetchUsdToJpyRate()
                    .then(function(rate) {
                        lastUsdToJpyRate = rate;
                        localStorage.setItem('usdToJpyRate', String(rate));
                        setRateDisplay(rate);
                        setRateStatus(formatUpdatedTime(new Date()));
                        applyCurrency('JPY', rate);
                    })
                    .catch(function() {
                        setRateDisplay(lastUsdToJpyRate);
                        setRateStatus(getRateUnavailableText());
                        applyCurrency('JPY', lastUsdToJpyRate);
                    });
            } else {
                if (currencyRateLabel) {
                    currencyRateLabel.textContent = '';
                }
                setRateStatus('');
                applyCurrency('USD', 1);
            }
        }

        if (currencySelect) {
            currencySelect.addEventListener('change', syncCurrency);
        }
        if (refreshRateButton) {
            refreshRateButton.addEventListener('click', syncCurrency);
        }

        syncCurrency();
        return syncCurrency;
    }

    window.initCurrencyControls = initCurrencyControls;
})();
