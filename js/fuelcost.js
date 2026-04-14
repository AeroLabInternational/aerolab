(function () {
    // ══════════════════════════════════════════════════════════════════════
    // SINGLE UPDATE POINT — change FUEL_PRICE_PER_LITER to update every
    // aircraft page simultaneously. All pages call initFuelCost() which
    // reads this value at load time.
    // ══════════════════════════════════════════════════════════════════════
    var FUEL_PRICE_PER_LITER = 2.00;   // USD per liter
    var GALLON_TO_LITER      = 3.78541;

    // Default liters per hour fallback (G550 value); pages can override
    // via opts.fuelLitersPerHour
    var DEFAULT_LPH = 431 * GALLON_TO_LITER;  // ≈ 1,631 L/hr

    function applyRate(rate, opts) {
        if (typeof rate !== 'number' || rate <= 0) return;
        opts = opts || {};

        var fuelRowEl   = document.getElementById(opts.fuelRowId  || 'fuelCostValue');
        var costCalc    = opts.costCalculator;
        var costCharts  = opts.costCharts;
        var otherHourly = (typeof opts.otherHourly === 'number') ? opts.otherHourly : 0;
        var lph         = opts.fuelLitersPerHour || DEFAULT_LPH;

        var fuelHourly  = Math.round(rate * lph);
        var totalHourly = fuelHourly + otherHourly;

        if (fuelRowEl) {
            fuelRowEl.dataset.usd = fuelHourly;
        }

        if (costCalc && typeof costCalc.setHourlyCost === 'function') {
            costCalc.setHourlyCost(totalHourly);
        }

        if (costCharts && costCharts.variableChart && costCharts.variableChart._baseData) {
            costCharts.variableChart._baseData[0] = fuelHourly;
            if (typeof refreshCostCharts === 'function') {
                refreshCostCharts();
            }
        }
    }

    // Public API
    window.initFuelCost = function (options) {
        options = options || {};
        applyRate(FUEL_PRICE_PER_LITER, options);
        window.applyFuelRate = applyRate;
    };

    // Accessors for display elements (per litre / per gallon)
    window.getFuelPricePerLiter  = function () { return FUEL_PRICE_PER_LITER; };
    window.getFuelPricePerGallon = function () { return FUEL_PRICE_PER_LITER * GALLON_TO_LITER; };
}());
