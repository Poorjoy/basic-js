const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if (typeof sampleActivity !== "string") {
        return false;
    }

    var numberActivity = parseFloat(sampleActivity);

    if (numberActivity > 0 && numberActivity <= MODERN_ACTIVITY) {
        return Math.ceil((Math.log(MODERN_ACTIVITY / numberActivity) * HALF_LIFE_PERIOD) / 0.693);
    }
    return false;
};

