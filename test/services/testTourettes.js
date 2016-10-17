import Tourettes from '../../src/services/tourettes';
import chai from 'chai';

const tourettes = new Tourettes();
const expect = chai.expect;

var tWordList =
    [
        'KUK'
    ];

var testText = ' Irish skinny, grinder affogato, dark, sweet carajillo, flavour seasonal aroma single origin cream. Percolator, foam, arabica, decaffeinated bar brewed aromatic. ';

describe("Tourettes service",function() {
   it("Says something", function() {
       var message = {
            text:testText
       };
       var text = tourettes.sayTourettes(message);
       expect(text).to.be.ok;
   });

   it("Says something, even when message is empty", function() {
     var message = {
          text:''
     };
       var text = tourettes.sayTourettes(message);
       expect(text).to.be.ok;
   });

   it("Says a specified amount of tourettes", function() {
     var message = {
          text:'12'
     };
       var text = tourettes.sayTourettes(message);
       expect(text).to.be.ok;
   });

   it("Returns a random value between 1 and 5.", function () {
       var output = Tourettes.randFromTo(1,5);
       expect([1,2,3,4,5]).to.include(output);
   })

   it("Spews stuff.", function () {
       var output = tourettes.spewTourettes(tWordList, 10);
       expect(output).to.contain(tWordList[0]);
   })

   it("testText is valid", function () {
       var output = Tourettes.isValidText(testText);
       expect(output).to.be.true;
   })

   it("Empty text is invalid", function () {
       var output = Tourettes.isValidText('');
       expect(output).to.be.false;
   })

   it("A number is identified as a number", function () {
       var output = Tourettes.isNumeric('5');
       expect(output).to.be.true;
   })
});
