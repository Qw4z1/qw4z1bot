import expect from 'expect';
import { sayMartinez } from '../martinez';

describe('martinez', () => {
  describe('sayMartinez', () => {
    it('replies something', () => {
      expect(sayMartinez()).toBe('Martinez!');
    });
  });
});