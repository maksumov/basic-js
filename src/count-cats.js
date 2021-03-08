/**
 * Your task is to count the cats hidden in the backyard
 * (presented by two-dimensional Array). Cats hide well,
 * but their ears ("^^") are clearly visible.
 * Your task is to implement the countCats(backyard)
 * function that will count cats. Good luck!
 *
 * Number of cats found should be number. If no cats found,
 * function should return 0.
 *
 * For example:
 *
 * countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3
 */

module.exports = countCats = (backyard) =>
  backyard.reduce(
    (cats, place) =>
      (cats += place.reduce(
        (catsInPlace, isItCat) => (catsInPlace += isItCat === '^^' ? 1 : 0),
        0
      )),
    0
  );
