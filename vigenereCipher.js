const { mod } = require('./util');

function vigenereCipher(msg, k, alphabet, n) {
  let key = makeVigenereKey(msg, k, alphabet);

  let messageArr = msg.split('');

  let encryptedMessageArr = messageArr.map((char, i) => {

    let charIndex = alphabet.indexOf(char.toLowerCase());
    let keyIndex = alphabet.indexOf(key[i].toLowerCase());

    if (charIndex != -1) {
      let encryptedCharIndex = (charIndex + keyIndex) % n;
      return alphabet[encryptedCharIndex];
    } else {
      return msg[i];
    }
  })

  return encryptedMessageArr.join('');
}

function decryptVigenereCipher(cipher, k, alphabet, n) {
  let key = makeVigenereKey(cipher, k, alphabet);

  let cipherArr = cipher.split('');

  let decryptedCipherArr = cipherArr.map((char, i) => {

    let charIndex = alphabet.indexOf(char.toLowerCase());
    let keyIndex = alphabet.indexOf(key[i].toLowerCase());

    if (charIndex != -1) {
      let decryptedCharIndex = mod((charIndex - keyIndex), n);
      return alphabet[decryptedCharIndex];
    } else {
      return cipher[i];
    }
  })
  
  return decryptedCipherArr.join('');
}

function makeVigenereKey(msg, key, alphabet) {
  let i = 0;
  let keyLength = key.length;
  let j = keyLength;
  while(key.length < msg.length) {
    if (alphabet.indexOf(msg[j].toLowerCase()) != -1) {
      key += key[i%keyLength];
      i++;
    } else {
      key += ' ';
    }
    j++;
  }
  return key;
}

module.exports = { vigenereCipher, decryptVigenereCipher};