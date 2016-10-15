import expect, { spyOn, restoreSpies } from 'expect';
import TelegramBot from 'node-telegram-bot-api';
import messengerFactory from '../messenger';
import { commands } from '../../handlers/inputHandler';
import config from '../../config';

describe('Messenger', () => {
  let messenger;
  let bot;

  beforeEach(() => {
    bot = new TelegramBot(config.telegram.token, { polling: true });
    messenger = messengerFactory(bot);
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

    afterEach(() => restoreSpies());

    describe('when asking for greeting', () => {
      const greetingText = '/start';
      const msg = Object.assign({}, message, { text: greetingText });
      let getGreeting;

      beforeEach(() => {
        getGreeting = spyOn(commands, 'getGreeting');
      });

      it('connects the getGreeting command', () => {
        messenger.handleText(msg);
        expect(getGreeting).toHaveBeenCalled();
      });
    });

    describe('when asking for bone', () => {
      const text = '/böne';
      const msg = Object.assign({}, message, { text });
      let getBone;

      beforeEach(() => {
        getBone = spyOn(commands, 'getBone');
      });

      it('connects the getBone command', () => {
        messenger.handleText(msg);
        expect(getBone).toHaveBeenCalled();
      });
    });

    describe('when asking for martinez', () => {
      const text = '/martinez';
      const msg = Object.assign({}, message, { text });
      let getMartinez;

      beforeEach(() => {
        getMartinez = spyOn(commands, 'getMartinez');
      });

      it('connects the getMartinez command', () => {
        messenger.handleText(msg);
        expect(getMartinez).toHaveBeenCalled();
      });
    });

    describe('when asking for bronas', () => {
      const text = '/bronas';
      const msg = Object.assign({}, message, { text });
      let getBronas;

      beforeEach(() => {
        getBronas = spyOn(commands, 'getBronas');
      });

      it('connects the getBronas command', () => {
        messenger.handleText(msg);
        expect(getBronas).toHaveBeenCalled();
      });
    });

    describe('when asking for boegivar', () => {
      const text = '/boegivar';
      const msg = Object.assign({}, message, { text });
      let getBoegivar;

      beforeEach(() => {
        getBoegivar = spyOn(commands, 'getBoegivar');
      });

      it('connects the getBoegivar command', () => {
        messenger.handleText(msg);
        expect(getBoegivar).toHaveBeenCalled();
      });
    });

    describe('when asking for tourettes', () => {
      const text = '/tourettes';
      const msg = Object.assign({}, message, { text });
      let getTourettes;

      beforeEach(() => {
        getTourettes = spyOn(commands, 'getTourettes');
      });

      it('connects the getTourettes command', () => {
        messenger.handleText(msg);
        expect(getTourettes).toHaveBeenCalled();
      });
    });

    describe('when asking for random', () => {
      const text = '/Bögivar';
      const msg = Object.assign({}, message, { text });
      let getFucker;

      beforeEach(() => {
        getFucker = spyOn(commands, 'getFucker');
      });

      it('connects the getFucker command', () => {
        messenger.handleText(msg);
        expect(getFucker).toHaveBeenCalled();
      });
    });

    describe('when asking for unknown', () => {
      const text = '/unknown';
      const msg = Object.assign({}, message, { text });
      let getHelp;

      beforeEach(() => {
        getHelp = spyOn(commands, 'getHelp');
      });

      it('connects the getHelp command', () => {
        messenger.handleText(msg);
        expect(getHelp).toHaveBeenCalled();
      });
    });
  });
});
