export default class Tourettes {

  constructor() {}

  sayTourettes(message)
    {
      // const tourMessage = new Message.mapMessage(message);
      // var inputTourettes = tourMessage.text;
      var inputTourettes = message.text;
      var tWordList =
        [
          'kuk',
          'fitta',
          'bullhora',
          'hora',
          'sagge',
          'eskimåfitta',
          'slappbög',
          'analslick',
          'passivist'
        ];
      var str = inputTourettes.substr(11, inputTourettes.length);
      var newString = "";
      for (var i = 0; i < str.length; i++)
        {
          newString += str[i] == ' ' && Tourettes.isTourettes() ? this.spewTourettes(tWordList) : str[i];
        }
      return newString;
    }

    static randFromTo(fromInt, toInt)
        {
          return Math.floor(Math.random() * (toInt - fromInt + 1) + fromInt);
        }

    static isTourettes()
        {
          if (Tourettes.randFromTo(1, 3) < 2)
            {
              return true;
            }
        }

    spewTourettes(wordList)
        {

          var tWord = wordList[Tourettes.randFromTo(0, wordList.length-1)];
          return ' ' + tWord.toUpperCase() + '! ';
        }
}
