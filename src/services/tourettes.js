export default class Tourettes {

  constructor() {}

  sayTourettes(message)
    {
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

      if (Tourettes.isValidText(str))
        {
          for (var i = 0; i < str.length; i++)
            {
              newString += str[i] == ' ' && Tourettes.isTourettes() ? this.spewTourettes(tWordList) : str[i];
            }
        }
      else
        {
          for (var i = 0; i < Tourettes.randFromTo(3, 10); i++)
            {
              newString += this.spewTourettes(tWordList);
            }
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

    static isValidText(testStr)
        {
          return testStr.length > 0 && testStr != ' ';
        }

    spewTourettes(wordList)
        {
          var tWord = wordList[Tourettes.randFromTo(0, wordList.length-1)];
          return ' ' + tWord.toUpperCase() + '! ';
        }
}
