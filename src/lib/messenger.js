import messageFactory from './message';
import * as inputParser from './inputParser';
import {
  handleBoegivar,
  handleBone,
  handleBronas,
  handleGreeting,
  handleMartinez,
  handleRandom,
  handleTourettes,
  handleHelp,
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
      const user = message.user || {};

      function hasCommand(input) {
        return (input.indexOf(' ') !== -1 && input.startsWith('/'));
      }

      function stripCommand(input) {
        let strippedText = '';
        let command = '';

        if (hasCommand(input)) {
          command = input.split(' ')[0];
          strippedText = input.substr(command.length, input.length).trim();
        }
        return strippedText;
      }

      const strippedText = stripCommand(message.text);

      if (inputParser.isAskingForGreeting(text)) {
        handleGreeting(bot, message.chat, user.firstName);
      } else if (inputParser.isAskingForBone(text)) {
        handleBone(bot, message.chat);
      } else if (inputParser.isAskingForMartinez(text)) {
        handleMartinez(bot, message.chat);
      } else if (inputParser.isAskingForBronas(text)) {
        handleBronas(bot, message.chat);
      } else if (inputParser.isAskingForBoegivar(text)) {
        handleBoegivar(bot, message.chat, user.firstName);
      } else if (inputParser.isAskingForTourettes(text)) {
        handleTourettes(bot, message.chat, strippedText);
      } else if (inputParser.isAskingForRandom(text)) {
        handleRandom(bot, message.chat);
      } else if (inputParser.isAskingForHelp(text)) {
        handleHelp(bot, message.chat);
      }
    },
  };
}
