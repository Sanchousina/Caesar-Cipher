const { mod } = require('./util');

function caesarCipher(msg, key, alphabet, n) {
  let messageArr = msg.split('');
  let encryptedMessageArr = messageArr.map((char, i) => {
    let charIndex = alphabet.indexOf(char.toLowerCase());
    if (charIndex != -1) {
      let encryptedCharIndex = (charIndex + key) % n;
      return char === char.toUpperCase() ? alphabet[encryptedCharIndex].toUpperCase() : alphabet[encryptedCharIndex];
    } else {
      return msg[i];
    }
  })
  return encryptedMessageArr.join('');
}

function decryptCaesarCipher(cipher, key, alphabet, n) {
  let cipherArr = cipher.split('');

  let decryptedCipherArr = cipherArr.map((char, i) => {
    let charIndex = alphabet.indexOf(char.toLowerCase());

    if (charIndex != -1) {
      let decryptedCharIndex = mod((charIndex - key), n);
      return char === char.toUpperCase() ? alphabet[decryptedCharIndex].toUpperCase() : alphabet[decryptedCharIndex];
    } else {
      return cipher[i];
    }
  })

  return decryptedCipherArr.join('');
}

// function mod(n, m) {
//   return ((n % m) + m) % m;
// }

module.exports = {caesarCipher, decryptCaesarCipher};