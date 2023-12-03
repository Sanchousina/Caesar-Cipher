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

module.exports = caesarCipher;