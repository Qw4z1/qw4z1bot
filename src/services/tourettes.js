const profanities = [
  'kuk',
  'fitta',
  'bullhora',
  'hora',
  'sagge',
  'eskimåfitta',
  'classes in JavaScript',
  'slappbög',
  'analslick',
  'passivist',
  'rövpiss',
  'kantarellsaft',
  'makrillsås',
  'bloody vaginal belch',
  'feministdemonstration',
  'mr potatomun',
  'fistelfisting',
  'piss! piss out my ass!!',
];

function getRandomNumber(min, max) {
  const maxMinDifference = (max - min);
  return Math.floor((Math.random() * (maxMinDifference + 1)) + min);
}

function isSupposedToTourette() {
  return getRandomNumber(1, 3) < 2;
}

export function getRandomProfanity() {
  const index = getRandomNumber(0, profanities.length - 1);
  return `${profanities[index].toUpperCase()}!`;
}

function maybeGetTourette(word) {
  if (isSupposedToTourette()) {
    return `${word} ${getRandomProfanity()}`;
  }
  return word;
}

function spewTourettes(inputWords = []) {
  return inputWords
    .map(maybeGetTourette)
    .join(' ');
}

function hasNoProfanity(inputText, reply) {
  const inputTextWordCount = inputText.split(' ').length;
  const replyWordCount = reply.split(' ').length;
  return inputTextWordCount === replyWordCount;
}

function getProfanities(amount) {
  const profanityReply = [];
  let count = 0;
  while (count < amount) {
    profanityReply.push(getRandomProfanity());
    count += 1;
  }
  return profanityReply.join(' ');
}

export function sayTourettes(inputText = '') {
  if (inputText === '') {
    return getProfanities(getRandomNumber(3, 10));
  }

  let reply = spewTourettes(inputText.split(' '));
  let profanityCheck = hasNoProfanity(inputText, reply);
  while (profanityCheck) {
    reply = spewTourettes(inputText.split(' '));
    profanityCheck = hasNoProfanity(inputText, reply);
  }
  return reply;
}
