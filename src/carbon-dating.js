/**
 * Your task is to implement the function dateSample(sampleActivity) that
 * calculates sample approximate age (in years). Please use given
 * MODERN_ACTIVITY and HALF_LIFE_PERIOD.
 *
 * Function parameter sampleActivity is a string. Calculated sample age must be number.
 *
 * Age must be integer. Age must be rounded up (ceiling). In case of wrong input parameter
 * type or inadequate activity value or absence of argument function must return false.
 *
 * For example:
 *    dateSample('1') => 22387 (or 22392 depending on formula used)
 *    dateSample('WOOT!') => false
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const isValidInput = (str) =>
  typeof str === 'string' &&
  str.trim().length > 0 &&
  !isNaN(+str) &&
  +str > 0 &&
  +str < MODERN_ACTIVITY;

const sanitizeInput = (str) => +str.trim();

const calculateAge = (activity) =>
  Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));

/**
 * Calculates sample approximate age (in years)
 * @param {String} sampleActivity - activity of C14 isotope in sample
 */
const dateSample = (sampleActivity) =>
  isValidInput(sampleActivity)
    ? calculateAge(sanitizeInput(sampleActivity))
    : false;

module.exports = dateSample;
