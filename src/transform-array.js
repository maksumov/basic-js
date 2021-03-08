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
      return {
        arr: transformed.arr,
        action: DISCARD_NEXT,
        nextDiscarded: true,
      };

    case DISCARD_PREV:
      return transformed.arr.length
        ? transformed.nextDiscarded
          ? {
              arr: transformed.arr,
              action: '',
              nextDiscarded: false,
            }
          : {
              arr: transformed.arr.slice(0, transformed.arr.length - 1),
              action: '',
              nextDiscarded: false,
            }
        : { arr: [], action: '', nextDiscarded: transformed.nextDiscarded };

    case DOUBLE_NEXT:
      return {
        arr: transformed.arr,
        action: DOUBLE_NEXT,
        nextDiscarded: false,
      };

    case DOUBLE_PREV:
      return transformed.arr.length
        ? transformed.nextDiscarded
          ? {
              arr: transformed.arr,
              action: '',
              nextDiscarded: false,
            }
          : {
              arr: [
                ...transformed.arr,
                transformed.arr[transformed.arr.length - 1],
              ],
              action: '',
              nextDiscarded: false,
            }
        : { arr: [], action: '', nextDiscarded: false };

    default:
      return transformed.action === DISCARD_NEXT
        ? { arr: transformed.arr, action: '', nextDiscarded: true }
        : transformed.action === DOUBLE_NEXT
        ? {
            arr: [...transformed.arr, elem, elem],
            action: '',
            nextDiscarded: false,
          }
        : { arr: [...transformed.arr, elem], action: '', nextDiscarded: false };
  }
};

const doTransformation = (arr) =>
  arr.reduce(reducer, { arr: [], action: '', nextDiscarded: false });

const transform = (arr) => doTransformation(validate(arr)).arr;

module.exports = transform;
