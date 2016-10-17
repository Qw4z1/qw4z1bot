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
          'passivist',
          'rövpiss',
          'kantarellsaft',
          'makrillsås',
          'bloody vaginal belch',
          'feministdemonstration',
          'mr potatomun',
          'fistelfisting'
        ];
      var str = inputTourettes.substr(11, inputTourettes.length);
      var newString = "";

        if (Tourettes.isNumeric(str))
          {
            newString = this.spewTourettes(tWordList, parseInt(str));
          }
        else if (Tourettes.isValidText(str))
          {
            newString = ' ';

            for (var i = 0; i < str.length; i++)
              {
                newString += str[i] == ' ' && Tourettes.isTourettes() ? this.spewTourettes(tWordList, 1) : str[i];
              }
          }
        else
          {
            newString = this.spewTourettes(tWordList, Tourettes.randFromTo(3, 10));
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

    static isNumeric(num)
        {
          return !isNaN(num);
        }

    spewTourettes(wordList, numberOfIterations)
        {
          var tWord = '';
          var newTString = '';

          for (var i = 0; i < numberOfIterations; i++)
            {
              tWord = wordList[Tourettes.randFromTo(0, wordList.length-1)];
              newTString += tWord.toUpperCase() + '! ';
            }

          return newTString;
        }
}
