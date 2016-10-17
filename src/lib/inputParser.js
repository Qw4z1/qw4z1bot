export function isAskingForGreeting(text) {
  return '/start'.includes(text);
}

export function isAskingForBone(text = '') {
  return text.includes('/böne');
}

export function isAskingForMartinez(text = '') {
  return text.includes('/martinez');
}

export function isAskingForBronas(text = '') {
  return text.includes('/bronas');
}

export function isAskingForBoegivar(text = '') {
  return text.includes('/boegivar');
}

export function isAskingForTourettes(text = '') {
  return text.includes('/tourettes');
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
