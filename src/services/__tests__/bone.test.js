import expect from 'expect';
import sayBone from '../bone';

describe('bone', () => {
  describe('sayBone', () => {
    it('replies with something', () => {
      expect(sayBone()).toBe('Bearman!');
    });
  });
});
