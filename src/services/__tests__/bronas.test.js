import expect from 'expect';
import sayBronas from '../bronas';

describe('bronas', () => {
  describe('sayBronas', () => {
    it('replies something', () => {
      expect(sayBronas()).toBe('Bronas!');
    });
  });
});
