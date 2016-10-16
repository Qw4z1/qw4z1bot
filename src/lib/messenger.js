import messageFactory from './message';
import * as inputParser from './inputParser';
import {
  getGreeting,
  getBone,
  getMartinez,
  getBronas,
  getTourettes,
  getFucker,
  getHelp,
  getBoegivar,
} from '../handlers/inputHandler';

export default function messenger(bot) {
  return {
    listen() {
      bot.on('text', this.handleText);
      return Promise.resolve();
    },

    handleText(msg) {
      const message = messageFactory(msg);
      const text = message.text.toLowerCase();

      if (inputParser.isAskingForGreeting(text)) {
        return getGreeting(message, bot);
      }

      if (inputParser.isAskingForBone(text)) {
        return getBone(message, bot);
      }

      if (inputParser.isAskingForMartinez(text)) {
        return getMartinez(message, bot);
      }

      if (inputParser.isAskingForBronas(text)) {
        return getBronas(message, bot);
      }

      if (inputParser.isAskingForBoegivar(text)) {
        return getBoegivar(message, bot);
      }

      if (inputParser.isAskingForTourettes(text)) {
        return getTourettes(message, bot);
      }

      if (inputParser.isAskingForRandom(text)) {
        return getFucker(message, bot);
      }

      return getHelp(message, bot);
    },
  };
}
