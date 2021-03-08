/**
 * Your task is to implement the class VigenereCipheringMachine.
 * constructor of this class accepts true (or nothing) to create direct
 * machine and false to create reverse machine. Each instance of
 * VigenereCipheringMachine must have 2 methods: encrypt and decrypt.
 *
 * encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).
 *
 * decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
 *
 * These parameters for both methods are mandatory.
 * If at least one of them has not been given, an Error must be thrown.
 * The text returned by these methods must be uppercase. Machines encrypt
 * and decrypt only latin alphabet (all other symbols remain unchanged).
 *
 * You don't need to validate value sent to constructor and to encrypt
 * and decrypt methods (except throwing an Error on absence of argument for these methods).
 *
 * For example:
 *    const directMachine = new VigenereCipheringMachine();
 *    const reverseMachine = new VigenereCipheringMachine(false);
 *    directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *    directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *    reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *    reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 */
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const textTransform = (message, key, shift = 1) =>
  message
    .toUpperCase()
    .split('')
    .reduce(
      (out, char) => ({
        str:
          out.str +
          ((index = ALPHABET.indexOf(char)) !== -1
            ? ALPHABET.charAt(
                (index +
                  ALPHABET.indexOf(key.toUpperCase()[out.idx % key.length]) *
                    shift +
                  26) %
                  26
              )
            : char),
        idx: ALPHABET.indexOf(char) !== -1 ? out.idx + 1 : out.idx,
      }),
      {
        str: '',
        idx: 0,
      }
    ).str;

const handleReverse = (str, reverse) =>
  reverse ? str.split('').reverse().join('') : str;

class VigenereCipheringMachine {
  constructor(directMode) {
    this.reverse = directMode === false;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();
    return handleReverse(textTransform(message, key), this.reverse);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();

    return handleReverse(
      textTransform(encryptedMessage, key, -1),
      this.reverse
    );
  }
}

module.exports = VigenereCipheringMachine;
