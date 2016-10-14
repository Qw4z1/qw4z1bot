import expect from 'expect';
import { tourettes } from '../tourettes';

describe('tourettes', () => {
  describe('sayTourettes', () => {
    describe('when input text is empty', () => {
      const inputText = '';
    });

    describe('when inputText is undefined', () => {
      const inputText = undefined;

      it('replies with an item from the profanities list', () => {
        const reply = tourettes.sayTourettes(inputText);
        expect(reply).toNotBe(undefined);
        expect(reply.length).toBeGreaterThan(1);
      });
    });

    describe('when input text is just one word', () => {
      const inputText = 'inputText';

      it('replies with an item from the profanities list', () => {
        const reply = tourettes.sayTourettes(inputText);
        expect(reply).toNotBe(undefined);
        expect(reply.length).toBeGreaterThan(1);
      });
    });

    describe('when input text is more than one word', () => {
      const inputText = 'input text';

      it('randomly inserts profanities', () => {
        const inputWordCount = inputText.split(' ').length;
        const reply = tourettes.sayTourettes(inputText);
        const replyWordCount = reply.split(' ').length;
        expect(replyWordCount).toBeGreaterThan(inputWordCount)
      });
    });
  });
});
