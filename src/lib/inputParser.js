export default class InputParser {

//  isAskingForStats(text) {
//    const pattern = '/stats';
//    return text.match(pattern);
//  }

  isAskingForGreeting(text) {
    const pattern = '/start';
    return text.includes(pattern)
  }

  isAskingForBone(text) {
    const pattern = '/böne';
    return text.includes(pattern);
  }

  isAskingForMartinez(text) {
    const pattern = '/martinez';
    return text.includes(pattern);
  }

  isAskingForBronas(text) {
    const pattern = '/bronas';
    return text.includes(pattern);
  }

  isAskingForBoegivar(text) {
    const pattern = '/boegivar';
    return text.includes(pattern);
  }

  isAskingForTourettes(text) {
    const pattern = '/tourettes';
    return text.includes(pattern);
  }

  isAskingForRandom(text) {
    return [
      '/Martinez',
      '/Bronas',
      '/Böne',
    //  '/stats',
      '/Boegivar'
    ].some(i => text.includes(i));
  }
}
