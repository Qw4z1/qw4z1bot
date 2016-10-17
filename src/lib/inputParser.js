export function isAskingForGreeting(text) {
  return text.match(/(^|\s)\/start(@qw4z1bot|$|\s)/) !== null;
}

export function isAskingForBone(text = '') {
  return text.match(/(^|\s)\/böne(@qw4z1bot|$|\s)/) !== null;
}

export function isAskingForMartinez(text = '') {
  return text.match(/(^|\s)\/martinez(@qw4z1bot|$|\s)/) !== null;
}

export function isAskingForBronas(text = '') {
  return text.match(/(^|\s)\/bronas(@qw4z1bot|$|\s)/) !== null;
}

export function isAskingForBoegivar(text = '') {
  return text.match(/(^|\s)\/boegivar(@qw4z1bot|$|\s)/) !== null;
}

export function isAskingForTourettes(text = '') {
  return text.match(/(^|\s)\/tourettes(@qw4z1bot|$|\s)/) !== null;
}

export function isAskingForHelp(text = '') {
  return text.match(/(^|\s)\/help(@qw4z1bot|$|\s)/) !== null;
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
