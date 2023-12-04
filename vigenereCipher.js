const { mod } = require('./util');

function vigenereCipher(msg, k, alphabet, n, type='encrypt') {
  let key = makeVigenereKey(msg, k);

  let messageArr = msg.split('');
  let j = 0;

  let encryptedMessageArr = messageArr.map((char, i) => {
    let charIndex = alphabet.indexOf(char.toLowerCase());
    
    if (charIndex != -1) {
      let keyIndex = alphabet.indexOf(key[j].toLowerCase());
      let encryptedCharIndex = type === 'decrypt' ? mod((charIndex - keyIndex), n) : (charIndex + keyIndex) % n;

      j++;
      return alphabet[encryptedCharIndex];
    } else {
      return msg[i];
    }
  })
  
  return encryptedMessageArr.join('');
}

function makeVigenereKey(msg, key) {
  key = key.replace(/[^а-яА-Я]/g, '');

  let i = 0;
  let keyLength = key.length;

  while(key.length < msg.length) {
    key += key[i%keyLength];
    i++;
  }
  return key;
}

module.exports = { vigenereCipher };