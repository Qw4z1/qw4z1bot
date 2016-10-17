import expect, { spyOn, restoreSpies } from 'expect';
import {
  handleBoegivar,
  handleBone,
  handleBronas,
  handleGreeting,
  handleMartinez,
  handleRandom,
  handleTourettes,
  handleHelp,
} from '../inputHandler';
import * as jeeves from '../../services/jeeves';
import * as bone from '../../services/bone';
import * as martinez from '../../services/martinez';
import * as bronas from '../../services/bronas';
import * as boegivar from '../../services/boegivar';
import * as tourettes from '../../services/tourettes';

describe('inputHandler', () => {
  const chatId = 'chatId';
  const bot = {
    sendMessage() {},
  };

  afterEach(() => restoreSpies());

  describe('handleGreeting', () => {
    const userFirstName = 'user first name';
    const greetingReply = 'reply';

    beforeEach(() => {
      spyOn(jeeves, 'getGreeting').andReturn(greetingReply);
    });

    it('gets a greeting from jeeves', () => {
      handleGreeting(bot, chatId, userFirstName);
      expect(jeeves.getGreeting).toHaveBeenCalled();
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleGreeting(bot, chatId, userFirstName);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, greetingReply);
    });
  });

  describe('handleBone', () => {
    const boneReply = 'bone reply';

    beforeEach(() => {
      spyOn(bone, 'sayBone').andReturn(boneReply);
    });

    it('gets the reply from bone', () => {
      handleBone(bot, chatId);
      expect(bone.sayBone).toHaveBeenCalled();
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleBone(bot, chatId);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, boneReply);
    });
  });

  describe('handleMartinez', () => {
    const martinezReply = 'martinez reply';

    beforeEach(() => {
      spyOn(martinez, 'sayMartinez').andReturn(martinezReply);
    });

    it('gets the reply from martinez', () => {
      handleMartinez(bot, chatId);
      expect(martinez.sayMartinez).toHaveBeenCalled();
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleMartinez(bot, chatId);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, martinezReply);
    });
  });

  describe('handleBronas', () => {
    const bronasReply = 'bronas reply';

    beforeEach(() => {
      spyOn(bronas, 'sayBronas').andReturn(bronasReply);
    });

    it('gets the reply from bronas', () => {
      handleBronas(bot, chatId);
      expect(bronas.sayBronas).toHaveBeenCalled();
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleBronas(bot, chatId);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, bronasReply);
    });
  });

  describe('handleBoegivar', () => {
    const userFirstName = 'user first name';
    const boegivarReply = 'boegivar reply';

    beforeEach(() => {
      spyOn(boegivar, 'sayBoegivar').andReturn(boegivarReply);
    });

    it('gets the reply from boegivar', () => {
      handleBoegivar(bot, chatId, userFirstName);
      expect(boegivar.sayBoegivar).toHaveBeenCalledWith(userFirstName);
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleBoegivar(bot, chatId, userFirstName);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, boegivarReply);
    });
  });

  describe('handleTourettes', () => {
    const text = 'text';
    const tourettesReply = 'tourettes reply';

    beforeEach(() => {
      spyOn(tourettes, 'sayTourettes').andReturn(tourettesReply);
    });

    it('gets reply from tourettes', () => {
      handleTourettes(bot, chatId, text);
      expect(tourettes.sayTourettes).toHaveBeenCalledWith(text);
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleTourettes(bot, chatId, text);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, tourettesReply);
    });
  });

  describe('handleRandom', () => {
    const randomReply = 'random reply';

    beforeEach(() => {
      spyOn(jeeves, 'getFucker').andReturn(randomReply);
    });

    it('gets reply from jeeves', () => {
      handleRandom(bot, chatId);
      expect(jeeves.getFucker).toHaveBeenCalled();
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleRandom(bot, chatId);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, randomReply);
    });
  });

  describe('handleHelp', () => {
    const unknownReply = 'unknown reply';

    beforeEach(() => {
      spyOn(jeeves, 'getHelp').andReturn(unknownReply);
    });

    it('gets reply from jeeves', () => {
      handleHelp(bot, chatId);
      expect(jeeves.getHelp).toHaveBeenCalled();
    });

    it('sends a reply', () => {
      spyOn(bot, 'sendMessage');
      handleHelp(bot, chatId);
      expect(bot.sendMessage).toHaveBeenCalledWith(chatId, unknownReply);
    });
  });
});
