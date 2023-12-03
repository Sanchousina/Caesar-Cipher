const caesarCipher = require('./caesarCipher');
const vigenereCipher = require('./vigenereCipher');

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

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

let message = 'Я сначала подумала, что он – секретный физик. Такое же загадочное выражение лица,'
let encrypetdMessage = 'Р гясисэс бахеюсэс, ида ая – гцьвцдямы ёъщъь. Дсьац шц щсфсхаияац умвсшцяъц эъзс,'

let message2 = 'Асимметричная криптография стала элегантным решением задачи распределения ключей. Но как это часто бывает, то что помогло устранить одну проблему, стало причиной возникновения другой.'
let encrypetdMessage2 = 'псщьмхврщжнро кбшпгюгбпфщо сгплр млхтаювнль рхзеюшеэ чафпчщ аавярхуеьфнщо кьнчхщ. ня ъаы мтя жавво скврфт, гю чгю пяьоуыо дбтбпнщвь яунд ярярлхьу, вваью пбшчщэоъ сошэиыэотфнщо дбггящ.'

let message3 = 'Первым об упрощении этой схемы задумался Ади Шамир в 1984 году. Он предположил, что если бы появилась возможность использовать в качестве открытого ключа имя или почтовый адрес Алисы, то это лишило бы сложную процедуру аутентификации всякого смысла. Долгое время идея Шамира оставалась всего лишь красивой криптографической головоломкой, но в 2000 году, благодаря одной известной уязвимости в эллиптической криптографии, идею удалось воплотить в жизнь.'
let encrypetdMessage3 = 'прщуым ъй епръвцниф ёдой эюцмы уихумлфгя апс йамфщ у 1984 гопь. ан пьнхпоччшил, гыа есчс ты пъзуиллън воухажнъъдь иэшальучуатз к ьачръдве ъыьрыючфо кчжиа ишз ъли ычитонды адьнг алфъм, то иыа лидсэо бж ъэожщьп пръяцдуьь сутрцдиффусциф кгякъла смжъэа. дъффое нщцмя фмця шлхъра ъъдавлфссь нъцго чсйь кьигивът ьриыыагрлэъчеэуай гъфавоччюкох, ца в 2000 гъме, бллладаьз аднът ъзвръднох ьрзвфхастф к оллфшдичръьой цщъптълваффс, ъдей ьхалъън воыфатиюе у жиуцн.'

console.log(encryptMessage(message, 18, alphabet) === encrypetdMessage);
console.log(encryptMessage(message2, 'пар', alphabet, 'word') === encrypetdMessage2);
console.log(encryptMessage(message3, 'алиса', alphabet, 'word') === encrypetdMessage3);

// console.log(caesarCipher(message, 18, alphabet, alphabet.length) === encrypetdMessage);
// console.log(vigenereCipher(message2, 'пар', alphabet, alphabet.length) === encrypetdMessage2);
// console.log(vigenereCipher(message3, 'алиса', alphabet, alphabet.length) === encrypetdMessage3);

module.exports = encryptMessage;