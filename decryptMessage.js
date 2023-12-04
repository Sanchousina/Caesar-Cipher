const { caesarCipher } = require('./caesarCipher');
const { vigenereCipher } = require('./vigenereCipher');

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function decryptMessage(cipher, key, alphabet, keyType='number') {
  let n = alphabet.length;

  if (keyType === 'number') {
    return caesarCipher(cipher, key, alphabet, n, 'decrypt');
  } else if (keyType === 'word') {
    return vigenereCipher(cipher, key, alphabet, n, 'decrypt');
  } else {
    console.log('This key type is not supported')
  }
}

// let message = 'Я сначала подумала, что он – секретный физик. Такое же загадочное выражение лица,'
// let encryptedMessage = 'Р гясисэс бахеюсэс, ида ая – гцьвцдямы ёъщъь. Дсьац шц щсфсхаияац умвсшцяъц эъзс,'
// console.log(decryptMessage(encryptedMessage, 18, alphabet));

// let message = 'Асимметричная криптография стала элегантным решением задачи распределения ключей. Но как это часто бывает, то что помогло устранить одну проблему, стало причиной возникновения другой.'
// let encryptedMessage = 'псщьмхврщжнро кбшпгюгбпфщо сгплр млхтаювнль рхзеюшеэ чафпчщ аавярхуеьфнщо кьнчхщ. ня ъаы мтя жавво скврфт, гю чгю пяьоуыо дбтбпнщвь яунд ярярлхьу, вваью пбшчщэоъ сошэиыэотфнщо дбггящ.'
// console.log(decryptMessage(encryptedMessage, "пар", alphabet, 'word'));

// not working:
// let key = 'лишило бы сложную процедуру аутентификации всякого смысла. Долгое время идея Шамира оставалась всего лишь красивой криптографической головоломкой, но в 2000 году, благодаря одной известной уязвимости в эллиптической криптографии, идею удалось воплотить в жизнь.'
// let encryptedMessage = 'ыникжы ъй лшьэенёсф лючв ъбушд аипвшидък опс ришчь к 1984 ычпв. ъц зщртычдчтчч, акч рачс щд ыэккбфлаз кжршэтцжъюк фъзччкучъиюк н ушараюкэ чющьдкчоэ цфцал чшз бфф юъакчнйх иьщра лфбъж, бъ ёкч ччдсдч мй эфжпщвй шичвупьиь лвюнёыфгфушяфч нъчуъсъ ъедэъл. мжфоэр киншн фмэз дошсии ъаюиъичоэе ъърсъ фббз щьийснэх уисыбълииачгнйуъш очдчнэччеуъш, щч ъ 2000 лътя, йдиоэпииз ътщчв сурръкцъш язакфыъъкс н лчфбшючгнйуъш цщбшюэощшэфч, фмэж ятлфжъз ръшдчючюе ъ пфцще.'

// console.log(decryptMessage(encryptedMessage, key, alphabet, 'word'));

module.exports = decryptMessage;