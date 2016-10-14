import expect from 'expect';
import { boegivar } from '../boegivar';

describe('boegivar', () => {
  describe('sayBoegivar', () => {
    it('returns a message containing parameter firstName', () => {
      const firstName = 'firstName';
      expect(boegivar.sayBoegivar(firstName)).toContain(firstName);
    });
  });
});
