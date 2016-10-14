import expect from 'expect';
import { bone } from '../bone';

describe('bone', () => {
  describe('sayBone', () => {
    it('replies with something', () => {
      expect(bone.sayBone()).toBe('Bearman!');
    });
  });
});
