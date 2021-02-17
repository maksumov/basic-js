/**
 * Your task is to implement the function transform(arr) that takes an array
 * and returns transformed array, based on the control sequences that arr
 * contains. Control sequences are defined string elements of the mentioned
 * array:
 *
 *   --discard-next excludes the next element of the array from the transformed
 *     array.
 *
 *   --discard-prev excludes the previous element of the array from the
 *     transformed array.
 *
 *   --double-next doubles the next element of the array in the transformed
 *     array.
 *
 *   --double-prev doubles the previous element of the array in the transformed
 *     array.
 *
 * For example:
 *     transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 *     transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 * The function must not affect inital array. Control sequences are applied
 * from left to right. Control sequences do not fall into the transformed array.
 * Control sequences in initial array don't occur in a row. If there is no
 * element next to the control sequence to which it can be applied, it does
 * nothing. The function should throw an Error if the arr is not an Array.
 */

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

const validate = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input data is not an Array!');
  }
  return arr;
};

const reducer = (transformed, elem) => {
  switch (elem) {
    case DISCARD_NEXT:
      return { arr: transformed.arr, action: DISCARD_NEXT };

    case DISCARD_PREV:
      return transformed.arr.length
        ? {
            arr: transformed.arr.slice(0, transformed.arr.length - 1),
            action: '',
          }
        : { arr: [], action: '' };

    case DOUBLE_NEXT:
      return { arr: transformed.arr, action: DOUBLE_NEXT };

    case DOUBLE_PREV:
      return transformed.arr.length
        ? {
            arr: [
              ...transformed.arr,
              transformed.arr[transformed.arr.length - 1],
            ],
            action: '',
          }
        : { arr: [], action: '' };

    default:
      return transformed.action === DISCARD_NEXT
        ? { arr: transformed.arr, action: '' }
        : transformed.action === DOUBLE_NEXT
        ? { arr: [...transformed.arr, elem, elem], action: '' }
        : { arr: [...transformed.arr, elem], action: '' };
  }
};

const doTransformation = (arr) => arr.reduce(reducer, { arr: [], action: '' });

const transform = (arr) => doTransformation(validate(arr)).arr;

module.exports = transform;

console.log(
  transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]),
  [1, 2, 3, 4, 5]
);

console.log(
  transform([
    '--discard-prev',
    333,
    '--discard-next',
    333,
    '--discard-prev',
    1.233,
    '--discard-prev',
    22,
    3.14,
    'ABC',
    22,
    '--double-next',
  ]),
  [333, 22, 3.14, 'ABC', 22]
);
