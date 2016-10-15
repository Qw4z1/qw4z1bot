export function isAskingForGreeting(text) {
  return '/start'.includes(text);
}

export function isAskingForBone(text) {
  return '/böne'.includes(text);
}

export function isAskingForMartinez(text) {
  return '/martinez'.includes(text);
}

export function isAskingForBronas(text) {
  return '/bronas'.includes(text);
}

export function isAskingForBoegivar(text) {
  return '/boegivar'.includes(text);
}

export function isAskingForTourettes(text) {
  return '/tourettes'.includes(text);
}

export function isAskingForStats(text) {
  return '/stats'.includes(text);
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
