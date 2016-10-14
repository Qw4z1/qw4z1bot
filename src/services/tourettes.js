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
  'piss! piss out my ass!!'
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomProfanity() {
  const index = getRandomNumber(0, profanities.length - 1);
  return profanities[index];
}

function isSupposedToTourette() {
  return getRandomNumber(1, 3) < 2;
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

export const tourettes = {
  sayTourettes(inputText = getRandomProfanity()) {
    const reply = spewTourettes(inputText.split(' '));
    if (hasNoProfanity(inputText, reply)) {
      return `${reply} ${getRandomProfanity()}`;
    }
    return reply;
  },
};
