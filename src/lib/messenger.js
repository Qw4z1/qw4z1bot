import messageFactory from './message';
import * as inputParser from './inputParser';
import { commands } from '../handlers/inputHandler';

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
        return commands.getGreeting(message, bot);
      }

      if (inputParser.isAskingForBone(text)) {
        return commands.getBone(message, bot);
      }

      if (inputParser.isAskingForMartinez(text)) {
        return commands.getMartinez(message, bot);
      }

      if (inputParser.isAskingForBronas(text)) {
        return commands.getBronas(message, bot);
      }

      if (inputParser.isAskingForBoegivar(text)) {
        return commands.getBoegivar(message, bot);
      }

      if (inputParser.isAskingForTourettes(text)) {
        return commands.getTourettes(message, bot);
      }

      if (inputParser.isAskingForRandom(text)) {
        return commands.getFucker(message, bot);
      }

      return commands.getHelp(message, bot);
    },
  };
}
