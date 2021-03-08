/**
 * Your task is to implement the function getSeason(date) that accepts Date
 * object and returns the time of the year that matches it. Time of the year
 * must be string.
 *
 * The names of the seasons in English are:
 *     spring, summer, autumn (fall), winter.
 *
 * If the date argument was not passed, the function must return the string
 * 'Unable to determine the time of year!'. If the date argument is invalid,
 * the function must throw an Error.
 *
 * Shh! An enemy scout has lurked among the arguments that come into this
 * function.
 *
 * He is guided by the famous proverb: “If it looks like a duck, swims like
 * a duck and quacks like a duck, then it probably is a duck (who cares what
 * it really is)”. He is expertly disguised as a real date, but a clever
 * javascript developer can catch him and throw an Error just in time!
 *
 * For example:
 *   const springDate = new Date(2020, 02, 31)
 *   getSeason(springDate) => 'spring'
 */

const SPRING = 'spring';
const SUMMER = 'summer';
const AUTUMN = 'autumn (fall)';
const WINTER = 'winter';
const SEASONS = [
  WINTER,
  WINTER,
  SPRING,
  SPRING,
  SPRING,
  SUMMER,
  SUMMER,
  SUMMER,
  AUTUMN,
  AUTUMN,
  AUTUMN,
  WINTER,
];

const isDate = (date) => date instanceof Date && !isNaN(date.valueOf());

const getSeason = (date) => {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (!isDate(date)) {
    throw new Error('Invalid date!');
  }

  return SEASONS[date.getMonth()];
};

module.exports = getSeason;
