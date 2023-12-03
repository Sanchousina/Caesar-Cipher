const { caesarCipher } = require('./caesarCipher');
const vigenereCipher = require('./vigenereCipher');

//const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function encryptMessage(msg, key, alphabet, keyType='number') {
  let n = alphabet.length;

  if (keyType === 'number') {
    return caesarCipher(msg, key, alphabet, n);
  } else if (keyType === 'word') {
    return vigenereCipher(msg, key, alphabet, n);
  } else if (keyType === 'sentence') {
    console.log('Not yet implemented')
  } else {
    console.log('This key type is not supported')
  }
}

module.exports = encryptMessage;