const { decryptCaesarCipher } = require('./caesarCipher');

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function decryptMessage(cipher, key, alphabet, keyType='number') {
  let n = alphabet.length;

  if (keyType === 'number') {
    return decryptCaesarCipher(cipher, key, alphabet, n);
  } else if (keyType === 'word') {
    
  } else if (keyType === 'sentence') {
    
  } else {
    
  }
}

// let message = 'Я сначала подумала, что он – секретный физик. Такое же загадочное выражение лица,'
// let encryptedMessage = 'Р гясисэс бахеюсэс, ида ая – гцьвцдямы ёъщъь. Дсьац шц щсфсхаияац умвсшцяъц эъзс,'
// console.log(decryptMessage(encryptedMessage, 18, alphabet));

module.exports = decryptMessage;