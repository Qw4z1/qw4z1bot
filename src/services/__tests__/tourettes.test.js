import expect from 'expect';
import { sayTourettes, getRandomProfanity } from '../tourettes';

describe('tourettes', () => {
  describe('getRandomProfanity', () => {
    it('returns a random word from the profanities list in upper case', () => {
      const randomProfanity = getRandomProfanity();
      const upperCaseProfanity = randomProfanity.toUpperCase();
      expect(randomProfanity).toBe(upperCaseProfanity);
    });

    it('appends an exclamation mark at the end of a profanity', () => {
      const randomProfanity = getRandomProfanity();
      expect(randomProfanity.endsWith('!')).toBe(true);
    });
  });

  describe('sayTourettes', () => {
    describe('when input text is empty', () => {
      const inputText = '';

      it('replies with an item from the profanities list', () => {
        const reply = sayTourettes(inputText);
        expect(reply).toNotBe(undefined);
        expect(reply.length).toBeGreaterThan(1);
      });
    });

    describe('when inputText is undefined', () => {
      const inputText = undefined;

      it('replies with an item from the profanities list', () => {
        const reply = sayTourettes(inputText);
        expect(reply).toNotBe(undefined);
        expect(reply.length).toBeGreaterThan(1);
      });
    });

    describe('when input text is just one word', () => {
      const inputText = 'inputText';

      it('replies with an item from the profanities list', () => {
        const reply = sayTourettes(inputText);
        expect(reply).toNotBe(undefined);
        expect(reply.length).toBeGreaterThan(1);
      });
    });

    describe('when input text is more than one word', () => {
      const inputText = 'input text';

      it('randomly inserts profanities', () => {
        const inputWordCount = inputText.split(' ').length;
        const reply = sayTourettes(inputText);
        const replyWordCount = reply.split(' ').length;
        expect(replyWordCount).toBeGreaterThan(inputWordCount)
      });
    });
  });
});
