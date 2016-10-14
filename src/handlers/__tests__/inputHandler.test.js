import expect, { spyOn } from 'expect';
import { commands } from '../inputHandler';
import { bone } from '../../services/bone';
import { bronas } from '../../services/bronas';
import { martinez } from '../../services/martinez';
import { boegivar } from '../../services/boegivar';
import { tourettes } from '../../services/tourettes';

describe('inputHandler commands', () => {
  const bot = {
    sendMessage() {
    }
  };
  const message = { chat: 'chat' };
  let botSpy;

  beforeEach(() => {
    botSpy = spyOn(bot, 'sendMessage');
  });

  afterEach(() => expect.restoreSpies());

  describe('getGreeting', () => {
    const msg = Object.assign({}, message, {
      user: {
        firstName: 'first name',
      },
    });

    it('returns proper message', () => {
      const expectedReply =
        `Hallåå ${msg.user.firstName}! Ja' é Qw4z1Bot, men kalla mig Boegivar.`;
      commands.getGreeting(msg, bot);
      expect(botSpy).toHaveBeenCalledWith(msg.chat, expectedReply);
    });
  });

  describe('getBone', () => {
    it('calls service "bone" for help', () => {
      const expectedReply = 'expected reply bone';
      const boneSpy = spyOn(bone, 'sayBone').andReturn(expectedReply);
      commands.getBone(message, bot);
      expect(boneSpy).toHaveBeenCalled();
      expect(botSpy).toHaveBeenCalledWith(message.chat, expectedReply);
    });
  });

  describe('getBronas', () => {
    it('calls service "bronas" for help', () => {
      const expectedReply = 'expected reply bronas';
      const bronasSpy = spyOn(bronas, 'sayBronas').andReturn(expectedReply);
      commands.getBronas(message, bot);
      expect(bronasSpy).toHaveBeenCalled();
      expect(botSpy).toHaveBeenCalledWith(message.chat, expectedReply);
    });
  });

  describe('getMartinez', () => {
    it('calls service "martinez" for help', () => {
      const expectedReply = 'expected reply martinez';
      const martinezSpy = spyOn(martinez, 'sayMartinez').andReturn(expectedReply);
      commands.getMartinez(message, bot);
      expect(martinezSpy).toHaveBeenCalled();
      expect(botSpy).toHaveBeenCalledWith(message.chat, expectedReply);
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
      commands.getHelp(message, bot);
      expect(botSpy).toHaveBeenCalledWith(message.chat, expectedReply);
    });
  });

  describe('getBoegivar', () => {
    const msg = Object.assign({}, message, {
      user: {
        firstName: 'first name',
      },
    });

    it('calls service "boegivar" for help', () => {
      const expectedReply = 'expected reply boegivar';
      const boegivarSpy = spyOn(boegivar, 'sayBoegivar').andReturn(expectedReply);
      commands.getBoegivar(msg, bot);
      expect(boegivarSpy).toHaveBeenCalledWith(msg.user.firstName);
      expect(botSpy).toHaveBeenCalledWith(msg.chat, expectedReply);
    });
  });

  describe('getFucker', () => {
    it('replies very rude', () => {
      const expectedReply = 'Hallå där din knickedick! ' +
        'Tryck upp en sjöpall i stolgången din jävla dagslända!';
      commands.getFucker(message, bot);
      expect(botSpy).toHaveBeenCalledWith(message.chat, expectedReply);
    });
  });

  describe('getTourettes', () => {
    const msg = Object.assign({}, message, { text: 'text' });
    it('calls service "tourettes" for help', () => {
      const expectedReply = 'expected reply tourettes';
      const tourettesSpy = spyOn(tourettes, 'sayTourettes').andReturn(expectedReply);
      commands.getTourettes(msg, bot);
      expect(tourettesSpy).toHaveBeenCalledWith(msg.text);
      expect(botSpy).toHaveBeenCalledWith(msg.chat, expectedReply);
    });
  });
});
