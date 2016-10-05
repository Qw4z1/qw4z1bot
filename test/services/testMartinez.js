import Martinez from '../../src/services/martinez';
import chai from 'chai';

const martinez = new Martinez();

describe("Martinez service",function() {
   it("Says 'Martinez!'", function() {
       var text = martinez.sayMartinez();
       
       chai.expect(text).to.equal("Martinez!");
   }); 
});

describe("Random test", function() {
    it("Does nothing", function () {
        chai.expect(true).to.equal(true);
    });
});