import Parser from '../../src/lib/inputParser';
import chai from 'chai';

const parser = new Parser();
const expect = chai.expect;

describe("Parse stuff",function() {
   it("Parse /Martinez", function() {
       var response = parser.isAskingForRandom("/Martinez");
       
       expect(response).to.be.true;
   });
   
    it("Parse /martinez", function() {
        var response = parser.isAskingForMartinez('/martinez');
    
        expect(response).to.be.true;
   }); 
   
   // TODO write more tests
});
