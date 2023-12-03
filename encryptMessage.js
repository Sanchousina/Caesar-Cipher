const { caesarCipher } = require('./caesarCipher');
const { vigenereCipher } = require('./vigenereCipher');

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

// let message = 'Асимметричная криптография стала элегантным решением задачи распределения ключей. Но как это часто бывает, то что помогло устранить одну проблему, стало причиной возникновения другой.'
// let encryptedMessage = 'псщьмхврщжнро кбшпгюгбпфщо сгплр млхтаювнль рхзеюшеэ чафпчщ аавярхуеьфнщо кьнчхщ. ня ъаы мтя жавво скврфт, гю чгю пяьоуыо дбтбпнщвь яунд ярярлхьу, вваью пбшчщэоъ сошэиыэотфнщо дбггящ.'
// console.log(encryptMessage(message, "пар", alphabet, 'word'));

module.exports = encryptMessage;