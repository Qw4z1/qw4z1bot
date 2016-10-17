import expect, { spyOn, restoreSpies } from 'expect';
import messengerFactory from '../messenger';
import * as inputHandler from '../../handlers/inputHandler';

describe('Messenger', () => {
  let messenger;
  const bot = {
    on() {},
    sendMessage() {},
  };

  beforeEach(() => {
    messenger = messengerFactory(bot);
  });

  describe('listen', () => {
    it('binds text handler to on text event', () => {
      spyOn(bot, 'on');
      messenger.listen();
      expect(bot.on).toHaveBeenCalledWith('text', messenger.handleText);
    });
  });

  describe('handleText', () => {
    const chatId = 'chat id';
    const userFirstName = 'user first name';
    const message = {
      from: {
        id: 'from id',
        first_name: userFirstName,
        last_name: 'last name',
      },
      chat: { id: chatId },
    };

    afterEach(() => restoreSpies());

    describe('when asking for greeting', () => {
      const greetingCommand = '/start';
      const msg = Object.assign({}, message, { text: greetingCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleGreeting');
      });

      it('delegates handling of greeting', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleGreeting).toHaveBeenCalledWith(bot, chatId, userFirstName);
      });
    });

    describe('when asking for bone', () => {
      const boneCommand = '/böne';
      const msg = Object.assign({}, message, { text: boneCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleBone');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleBone).toHaveBeenCalledWith(bot, chatId);
      });
    });

    describe('when asking for martinez', () => {
      const martinezCommand = '/martinez';
      const msg = Object.assign({}, message, { text: martinezCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleMartinez');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleMartinez).toHaveBeenCalledWith(bot, chatId);
      });
    });

    describe('when asking for bronas', () => {
      const bronasCommand = '/bronas';
      const msg = Object.assign({}, message, { text: bronasCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleBronas');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleBronas).toHaveBeenCalledWith(bot, chatId);
      });
    });

    describe('when asking for boegivar', () => {
      const boegivarCommand = '/boegivar';
      const msg = Object.assign({}, message, { text: boegivarCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleBoegivar');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleBoegivar)
          .toHaveBeenCalledWith(bot, chatId, userFirstName);
      });
    });

    describe('when asking for tourettes', () => {
      const tourettesCommand = '/tourettes';
      const msg = Object.assign({}, message, { text: tourettesCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleTourettes');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleTourettes)
          .toHaveBeenCalledWith(bot, chatId, tourettesCommand);
      });
    });

    describe('when asking for random', () => {
      const randomCommand = '/Bögivar';
      const msg = Object.assign({}, message, { text: randomCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleRandom');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleRandom).toHaveBeenCalledWith(bot, chatId);
      });
    });

    describe('when asking for help', () => {
      const helpCommand = '/help';
      const msg = Object.assign({}, message, { text: helpCommand });

      beforeEach(() => {
        spyOn(inputHandler, 'handleHelp');
      });

      it('delegates handling of reply', () => {
        messenger.handleText(msg);
        expect(inputHandler.handleHelp).toHaveBeenCalledWith(bot, chatId);
      });
    });
  });
});
