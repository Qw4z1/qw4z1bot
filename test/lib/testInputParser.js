import Parser from '../../src/lib/inputParser';
import chai from 'chai';

const parser = new Parser();
const expect = chai.expect;

describe("Parse stuff",function() {
   it("Parse /Brony", function() {
       var response = parser.isAskingForRandom("/Brony");

       expect(response).to.be.true;
   });

    it("Parse /martinez", function() {
        var response = parser.isAskingForMartinez('/martinez');

        expect(response).to.be.true;
   });
/*
   it("Parse /MARTINEZ, check .toLowerCase()", function() {
       var response = parser.isAskingForMartinez('/MARTINEZ');

       expect(response).to.be.true;
  });
*/

   // TODO write more tests
});
