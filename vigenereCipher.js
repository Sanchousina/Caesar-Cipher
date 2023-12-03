const { mod } = require('./util');

function vigenereCipher(msg, k, alphabet, n) {
  let key = makeVigenereKey(msg, k);

  let messageArr = msg.split('');
  let j = 0;

  let encryptedMessageArr = messageArr.map((char, i) => {
    let charIndex = alphabet.indexOf(char.toLowerCase());
    
    if (charIndex != -1) {
      let keyIndex = alphabet.indexOf(key[j].toLowerCase());
      let encryptedCharIndex = (charIndex + keyIndex) % n;

      j++;
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
  let j = 0;

  let decryptedCipherArr = cipherArr.map((char, i) => {

    let charIndex = alphabet.indexOf(char.toLowerCase());
    
    if (charIndex != -1) {
      let keyIndex = alphabet.indexOf(key[j].toLowerCase());
      let decryptedCharIndex = mod((charIndex - keyIndex), n);

      j++;
      return alphabet[decryptedCharIndex];
    } else {
      return cipher[i];
    }
  })

  return decryptedCipherArr.join('');
}

function makeVigenereKey(msg, key) {
  let i = 0;
  let keyLength = key.length;

  while(key.length < msg.length) {
    key += key[i%keyLength];
    i++;
  }
  return key;
}

module.exports = { vigenereCipher, decryptVigenereCipher};