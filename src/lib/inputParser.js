export function isAskingForGreeting(text) {
  return '/start'.includes(text);
}

export function isAskingForBone(text = '') {
  return text.match(/(^|\s)\/böne($|\s)/) !== null;
}

export function isAskingForMartinez(text = '') {
  return text.match(/(^|\s)\/martinez($|\s)/) !== null;
}

export function isAskingForBronas(text = '') {
  return text.match(/(^|\s)\/bronas($|\s)/) !== null;
}

export function isAskingForBoegivar(text = '') {
  return text.match(/(^|\s)\/boegivar($|\s)/) !== null;
}

export function isAskingForTourettes(text = '') {
  return text.match(/(^|\s)\/tourettes($|\s)/) !== null;
}

export function isAskingForRandom(text) {
  return [
    '/martines',
    '/brony',
    '/bone',
    '/böner',
    '/bögivar'
  ].some(item => text.includes(item));
}
