import expect from 'expect';
import {
  getFucker,
  getGreeting,
  getHelp,
} from '../jeeves';

describe('jeeves', () => {
  describe('getFucker', () => {
    it('replies very rude', () => {
      const expectedReply = 'Hallå där din knickedick! ' +
        'Tryck upp en sjöpall i stolgången din jävla dagslända!';
      expect(getFucker()).toBe(expectedReply);
    });
  });

  describe('getGreeting', () => {
    it('replies with a proper greeting', () => {
      const firstName = 'first name';
      expect(getGreeting(firstName))
        .toBe(`Hallåå ${firstName}! Ja' é Qw4z1Bot, men kalla mig Boegivar.`);
    });
  });

  describe('getHelp', () => {
    it('replies with a list of available commands', () => {
      const expectedReply = `Available commands:
/böne
/martinez
/bronas
/boegivar
/tourettes
`;
      expect(getHelp()).toBe(expectedReply);
    });
  });
});
