const { decryptCaesarCipher } = require('./caesarCipher');
const { decryptVigenereCipher } = require('./vigenereCipher');

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function decryptMessage(cipher, key, alphabet, keyType='number') {
  let n = alphabet.length;

  if (keyType === 'number') {
    return decryptCaesarCipher(cipher, key, alphabet, n);
  } else if (keyType === 'word') {
    return decryptVigenereCipher(cipher, key, alphabet, n);
  } else if (keyType === 'sentence') {
    
  } else {
    
  }
}

// let message = 'Я сначала подумала, что он – секретный физик. Такое же загадочное выражение лица,'
// let encryptedMessage = 'Р гясисэс бахеюсэс, ида ая – гцьвцдямы ёъщъь. Дсьац шц щсфсхаияац умвсшцяъц эъзс,'
// console.log(decryptMessage(encryptedMessage, 18, alphabet));

// let message = 'Асимметричная криптография стала элегантным решением задачи распределения ключей. Но как это часто бывает, то что помогло устранить одну проблему, стало причиной возникновения другой.'
// let encryptedMessage = 'псщьмхврщжнро кбшпгюгбпфщо сгплр млхтаювнль рхзеюшеэ чафпчщ аавярхуеьфнщо кьнчхщ. ня ъаы мтя жавво скврфт, гю чгю пяьоуыо дбтбпнщвь яунд ярярлхьу, вваью пбшчщэоъ сошэиыэотфнщо дбггящ.'
// console.log(decryptMessage(encryptedMessage, "пар", alphabet, 'word'));

module.exports = decryptMessage;