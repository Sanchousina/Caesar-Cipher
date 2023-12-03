const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function encryptMessage(msg, key, alphabet, n) {
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

let message = 'Я сначала подумала, что он – секретный физик. Такое же загадочное выражение лица,'
let encrypetdMessage = 'Р гясисэс бахеюсэс, ида ая – гцьвцдямы ёъщъь. Дсьац шц щсфсхаияац умвсшцяъц эъзс,'

console.log(encryptMessage(message, 18, alphabet, alphabet.length));
