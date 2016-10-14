import expect, { spyOn } from 'expect';
import TelegramBot from 'node-telegram-bot-api';
import Messenger from '../messenger';
import config from '../../config';

describe('Messenger', () => {
  let messenger;
  let bot;

  beforeEach(() => {
    bot = new TelegramBot(config.telegram.token, { polling: true });
    messenger = new Messenger(bot);
  });

  describe('listen', () => {
    it('binds text handler to on text event', () => {
      const spy = spyOn(bot, 'on');
      messenger.listen();
      expect(spy).toHaveBeenCalledWith('text', messenger.handleText);
    });
  });

  describe('handleText', () => {
    const message = {
      from: {
        id: 'from id',
        first_name: 'first name',
        last_name: 'last name',
      },
      chat: { id: 'chat id' },
    };

    describe('when asking for greeting', () => {
      const greetingText = '/start';
      const msg = Object.assign({}, message, { text: greetingText });

      it('connects the getGreeting handler', () => {
        // TODO ...
      });
    });

    describe('when asking for bone', () => {
      // TODO
    });

    describe('when asking for martinez', () => {
      // TODO
    });

    describe('when asking for bronas', () => {
      // TODO
    });

    describe('when asking for boegivar', () => {
      // TODO
    });

    describe('when asking for tourettes', () => {
      // TODO
    });

    describe('when asking for random', () => {
      // TODO
    });

    describe('when asking for unknown', () => {
      // TODO
    });
  });
});
