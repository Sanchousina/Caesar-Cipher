const encryptMessage = require('./encryptMessage');

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

test('properly encrypt message with caesar cipher', () => {
  let message = 'Я сначала подумала, что он – секретный физик. Такое же загадочное выражение лица,'
  let encryptedMessage = 'Р гясисэс бахеюсэс, ида ая – гцьвцдямы ёъщъь. Дсьац шц щсфсхаияац умвсшцяъц эъзс,'
  expect(encryptMessage(message, 18, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'встрепанные волосы и небрежность в одежде. Представляете, вообще не посмотрел в'
  let encryptedMessage = 'мьэыпъкшшёп мщцщьё у шплыпсшщьэж м щопсоп. Ъыпоьэкмцйпэп, мщщлдп шп ъщьчщэыпц м'
  expect(encryptMessage(message, 11, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'мою сторону! Меня это так возмутило. Сначала я в пику ему стала вовсю флиртовать с'
  let encryptedMessage = 'жиш лмикизн! Жязщ чми мъе ьивжнмгёи. Лзъсъёъ щ ь йген яжн лмъёъ ьиьлш оёгкмиьъмц л'
  expect(encryptMessage(message, 27, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'поклонниками, ходила танцевать, один раз даже сбила юбкой бутылку пива ему на колени.'
  let encryptedMessage = 'вбэюбааыэтяы, збцыют етаичфтео, бцыа гтъ цтщч дуыют руэбь уёенюэё выфт чяё ат эбючаы.'
  expect(encryptMessage(message, 19, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'Так он и в этом случае на меня не посмотрел. Поднял глаза на хозяйку квартиры и говорит:'
  let encryptedMessage = 'Щжс хф п и дщху штъюжл фж улфё фл цхшухщчлт. Цхкфёт йтжож фж ьхоёрсъ сижчщпчв п йхихчпщ:'
  expect(encryptMessage(message, 7, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = '"Лена, мне бы произвести процесс дегидратации штанов". Лена долго пыталась понять – что'
  let encryptedMessage = '"Хочй, цчо ке щъштслоыьт щъшаоыы номтнъйьйатт вьйчшл". Хочй ншхмш щеьйхйыё щшчиьё – бьш'
  expect(encryptMessage(message, 10, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'она должна сделать с его штанами, но потом сообразила, увела Сережу в ванную, откуда он вернулся в штанах ее мужа-культуриста.'
  let encryptedMessage = 'ьын сьщфын ястщнай я трь ёанынъц, ыь эьаьъ яььоюнхцщн, бптщн Ятютфб п пныыбл, ьашбсн ьы птюыбщям п ёанынг тт ъбфн-шбщйабюцяан.'
  expect(encryptMessage(message, 14, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'И черт меня дернул выйти за него замуж! Ведь сама - не дура! Не уродина! И поклонниками'
  let encryptedMessage = 'Я ныжи гыдх ъыждйв шсаия юц дыще юцгйэ! Шыът зцгц - ды ъйжц! Ды йжеъядц! Я ёебведдябцгя'
  expect(encryptMessage(message, 23, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'не была обижена. Даже совсем наоборот, вились вокруг косяками. Я его, наверное, поэтому'
  let encryptedMessage = 'эф ркып юршцфэп. Упцф бюсбфь эпюрюаюв, сшышбл сюъагт ъюбоъпьш. О фтю, эпсфаэюф, яюмвюьг'
  expect(encryptMessage(message, 16, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'сразу и приметила на той вечеринке. Все мужики вокруг меня так и скачут, приносят шампанское,'
  let encryptedMessage = 'ъщирь с шщсхнысфи ци ычт кнанщсцун. Кън хьпсус кчущьл хнцз ыиу с ъуиаьы, шщсцчъзы бихшицъучн,'
  expect(encryptMessage(message, 9, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'суют конфетки, приглашают потанцевать. А Сережа как пришел, так сел на диван, поставил перед'
  let encryptedMessage = 'ежсё ювбзшёюь, гдьцяулусё гвёубйшхуёп. У Ешдшъу юую гдьлшя, ёую ешя бу чьхуб, гвеёухья гшдшч'
  expect(encryptMessage(message, 20, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'собой с десяток бутылок пива и стал их по очереди осушать, думая какую-то свою думу. На меня не обратил ни малейшего внимания.'
  let encryptedMessage = 'вясяъ в фхвпгяы сдгльяы ащтр щ вгрь щё ая язхбхфщ явдиргм, фдэрп ырыдо-гя втяо фдэд. Юр эхюп юх ясбргщь ющ эрьхъихуя тющэрющп.'
  expect(encryptMessage(message, 17, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'Я, чтобы разрядить обстановку, пригласила его потанцевать. Тот сначала долго не соглашался,'
  let encryptedMessage = 'У, лжгхп ефьеушэжр гхёжфвгцяз, деэчафёэаф щчг дгжфвкщцфжр. Жгж ёвфлфаф шгачг вщ ёгчафмфаёу,'
  expect(encryptMessage(message, 21, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'заявляя, что в последний раз танцевал еще до изобретения компьютеров, но потом, все-таки, уломался.'
  let encryptedMessage = 'фмлошлл, дяы о ьыюшсръхц эмф ямъгсомш сёс ры хфынэсясъхл чыщьикясэыо, ъы ьыяыщ, оюс-ямчх, ашыщмшюл.'
  expect(encryptMessage(message, 13, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'Во время танца он непрерывно говорил, но я понимала максимум одно слово из двадцати. Несколько раз'
  let encryptedMessage = 'Нъ ньршк юлщвл ъщ щрыьрьжнщъ оънъьфч, щъ к ыъщфшлчл шлцэфшяш ъпщъ эчънъ фу пнлпвлюф. Щрэцъчзцъ ьлу'
  expect(encryptMessage(message, 12, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'прозвучало слово "карта", из чего я заключила, что парень не дурак поразвлечься. Один раз он употребил'
  let encryptedMessage = 'юяэцрвёоъэ аъэрэ "щоябо", чц ёусэ н цощъмёчъо, ёбэ юояуьк ьу твяощ юэяоцръуёкан. Этчь яоц эь вюэбяупчъ'
  expect(encryptMessage(message, 15, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'слово "порт", из которого можно было понять, что его профессия как-то связана с морем. Термин "кабель"'
  let encryptedMessage = 'ъфчкч "шчщы", ср учычщчлч хчпцч йдфч шчцзые, аыч нлч шщчэнъъсз уиу-ыч ъкзрици ъ хчщнх. Ынщхсц "уийнфе"'
  expect(encryptMessage(message, 9, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with caesar cipher', () => {
  let message = 'указывал на то, что он имеет отношение к электричеству. Короче, такой загадочный парень оказался – это что-то.'
  let encryptedMessage = 'вщоцйроъ ьо бэ, ёбэ эь чыууб эбьэжуьчу щ лъущбячёуабрв. Щэяэёу, бощэш цосотэёьйш юояуьк эщоцоъан – лбэ ёбэ-бэ.'
  expect(encryptMessage(message, 15, alphabet)).toBe(encryptedMessage)
})

test('properly encrypt message with vigenere cipher', () => {
  let message = 'Асимметричная криптография стала элегантным решением задачи распределения ключей. Но как это часто бывает, то что помогло устранить одну проблему, стало причиной возникновения другой.'
  let encryptedMessage = 'псщьмхврщжнро кбшпгюгбпфщо сгплр млхтаювнль рхзеюшеэ чафпчщ аавярхуеьфнщо кьнчхщ. ня ъаы мтя жавво скврфт, гю чгю пяьоуыо дбтбпнщвь яунд ярярлхьу, вваью пбшчщэоъ сошэиыэотфнщо дбггящ.'
  expect(encryptMessage(message, "пар", alphabet, 'word')).toBe(encryptedMessage)
})

test('properly encrypt message with vigenere cipher', () => {
  let message = 'Первым об упрощении этой схемы задумался Ади Шамир в 1984 году. Он предположил, что если бы появилась возможность использовать в качестве открытого ключа имя или почтовый адрес Алисы, то это лишило бы сложную процедуру аутентификации всякого смысла. Долгое время идея Шамира оставалась всего лишь красивой криптографической головоломкой, но в 2000 году, благодаря одной известной уязвимости в эллиптической криптографии, идею удалось воплотить в жизнь.'
  let encryptedMessage = 'прщуым ъй епръвцниф ёдой эюцмы уихумлфгя апс йамфщ у 1984 гопь. ан пьнхпоччшил, гыа есчс ты пъзуиллън воухажнъъдь иэшальучуатз к ьачръдве ъыьрыючфо кчжиа ишз ъли ычитонды адьнг алфъм, то иыа лидсэо бж ъэожщьп пръяцдуьь сутрцдиффусциф кгякъла смжъэа. дъффое нщцмя фмця шлхъра ъъдавлфссь нъцго чсйь кьигивът ьриыыагрлэъчеэуай гъфавоччюкох, ца в 2000 гъме, бллладаьз аднът ъзвръднох ьрзвфхастф к оллфшдичръьой цщъптълваффс, ъдей ьхалъън воыфатиюе у жиуцн.'
  expect(encryptMessage(message, "алиса", alphabet, 'word')).toBe(encryptedMessage)
})

test('properly encrypt message with vigenere cipher', () => {
  let message = 'Первым об упрощении этой схемы задумался Ади Шамир в 1984 году. Он предположил, что если бы появилась возможность использовать в качестве открытого ключа имя или почтовый адрес Алисы, то это лишило бы сложную процедуру аутентификации всякого смысла. Долгое время идея Шамира оставалась всего лишь красивой криптографической головоломкой, но в 2000 году, благодаря одной известной уязвимости в эллиптической криптографии, идею удалось воплотить в жизнь.'
  let encryptedMessage = 'прщвжх ом ьпьчщрциф ётът сбнмж рапьмлфск идф башср н 1984 лопь. ощ шррмпъфотсл, гыо рълф йы ычянсллъь нчзшчжщчсюе иэшочезъкаюе в цичрътнн оюуржыооч кчжчл смк слф шогыондй лмрръ ачссж, ыо иыо чсшффо мд сччжщью ыщовндящу льтрцтфэицицфс вэзкъло эхыэфа. пчлоче нщешз ипня димфща ъътлкачисз ксрло чсшз урлъинчй цщиыыоощаасчръкът гъфончлъхкът, нъ к 2000 гъму, мфаочдлщя ъмнът иукеэынът укрвфхоэыи н ёлчспюсчръкът кьспючгьиффс, ипню ямаччсз коыфоюстз к жфрнз.'
  expect(encryptMessage(message, "Али", alphabet, 'word')).toBe(encryptedMessage)
})