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

module.exports = vigenereCipher;