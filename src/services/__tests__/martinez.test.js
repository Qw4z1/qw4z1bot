import expect from 'expect';
import { martinez } from '../martinez';

describe('martinez', () => {
  describe('sayMartinez', () => {
    it('replies something', () => {
      expect(martinez.sayMartinez()).toBe('Martinez!');
    });
  });
});