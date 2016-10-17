import expect, { spyOn, restoreSpies } from 'expect';
import messengerFactory from '../messenger';
import * as jeeves from '../../services/jeeves';
import * as bone from '../../services/bone';
import * as martinez from '../../services/martinez';
import * as bronas from '../../services/bronas';
import * as boegivar from '../../services/boegivar';
import * as tourettes from '../../services/tourettes';

describe('Messenger', () => {
  let messenger;
  const bot = {
    on() {
    },
    sendMessage() {
    },
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
    let messageSpy;
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

    beforeEach(() => {
      spyOn(bot, 'sendMessage');
    });

    afterEach(() => restoreSpies());

    describe('when asking for greeting', () => {
      const greetingCommand = '/start';
      const msg = Object.assign({}, message, { text: greetingCommand });
      const greetingReply = 'greeting';
      let getGreeting;

      beforeEach(() => {
        spyOn(jeeves, 'getGreeting').andReturn(greetingReply);
      });

      it('gets a greeting from jeeves', () => {
        messenger.handleText(msg);
        expect(jeeves.getGreeting).toHaveBeenCalled();
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage)
          .toHaveBeenCalledWith(chatId, greetingReply);
      });
    });

    describe('when asking for bone', () => {
      const boneCommand = '/böne';
      const boneReply = 'bone reply';
      const msg = Object.assign({}, message, { text: boneCommand });

      beforeEach(() => {
        spyOn(bone, 'sayBone').andReturn(boneReply);
      });

      it('gets the reply from bone', () => {
        messenger.handleText(msg);
        expect(bone.sayBone).toHaveBeenCalled();
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, boneReply);
      });
    });

    describe('when asking for martinez', () => {
      const martinezCommand = '/martinez';
      const martinezReply = 'martinez reply';
      const msg = Object.assign({}, message, { text: martinezCommand });

      beforeEach(() => {
        spyOn(martinez, 'sayMartinez').andReturn(martinezReply);
      });

      it('gets the reply from martinez', () => {
        messenger.handleText(msg);
        expect(martinez.sayMartinez).toHaveBeenCalled();
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, martinezReply);
      });
    });

    describe('when asking for bronas', () => {
      const bronasCommand = '/bronas';
      const bronasReply = 'bronas reply';
      const msg = Object.assign({}, message, { text: bronasCommand });

      beforeEach(() => {
        spyOn(bronas, 'sayBronas').andReturn(bronasReply);
      });

      it('gets the reply from bronas', () => {
        messenger.handleText(msg);
        expect(bronas.sayBronas).toHaveBeenCalled();
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, bronasReply);
      });
    });

    describe('when asking for boegivar', () => {
      const boegivarCommand = '/boegivar';
      const boegivarReply = 'boegivar reply';
      const msg = Object.assign({}, message, { text: boegivarCommand });

      beforeEach(() => {
        spyOn(boegivar, 'sayBoegivar').andReturn(boegivarReply);
      });

      it('gets the reply from boegivar', () => {
        messenger.handleText(msg);
        expect(boegivar.sayBoegivar).toHaveBeenCalledWith(userFirstName);
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, boegivarReply);
      });
    });

    describe('when asking for tourettes', () => {
      const tourettesCommand = '/tourettes';
      const tourettesReply = 'tourettes reply';
      const msg = Object.assign({}, message, { text: tourettesCommand });

      beforeEach(() => {
        spyOn(tourettes, 'sayTourettes').andReturn(tourettesReply);
      });

      it('gets the reply from tourettes', () => {
        messenger.handleText(msg);
        expect(tourettes.sayTourettes).toHaveBeenCalledWith(tourettesCommand);
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, tourettesReply);
      });
    });

    describe('when asking for random', () => {
      const randomCommand = '/Bögivar';
      const randomReply = 'random reply';
      const msg = Object.assign({}, message, { text: randomCommand });

      beforeEach(() => {
        spyOn(jeeves, 'getFucker').andReturn(randomReply);
      });

      it('connects the getFucker command', () => {
        messenger.handleText(msg);
        expect(jeeves.getFucker).toHaveBeenCalled();
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, randomReply);
      });
    });

    describe('when asking for unknown', () => {
      const unknownCommand = '/unknown';
      const unknownReply = 'unknown reply';
      const msg = Object.assign({}, message, { text: unknownCommand });

      beforeEach(() => {
        spyOn(jeeves, 'getHelp').andReturn(unknownReply);
      });

      it('connects the getHelp command', () => {
        messenger.handleText(msg);
        expect(jeeves.getHelp).toHaveBeenCalled();
      });

      it('sends a reply', () => {
        messenger.handleText(msg);
        expect(bot.sendMessage).toHaveBeenCalledWith(chatId, unknownReply);
      });
    });
  });
});
