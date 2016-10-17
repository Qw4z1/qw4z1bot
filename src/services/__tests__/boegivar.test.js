import expect from 'expect';
import sayBoegivar from '../boegivar';

describe('boegivar', () => {
  describe('sayBoegivar', () => {
    it('returns a message containing parameter firstName', () => {
      const firstName = 'firstName';
      expect(sayBoegivar(firstName)).toContain(firstName);
    });
  });
});
