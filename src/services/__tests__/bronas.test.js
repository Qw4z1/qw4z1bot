import expect from 'expect';
import { bronas } from '../bronas';

describe('bronas', () => {
  describe('sayBronas', () => {
    it('replies something', () => {
      expect(bronas.sayBronas()).toBe('Bronas!');
    });
  });
});
