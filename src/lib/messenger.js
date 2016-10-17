import messageFactory from './message';
import * as inputParser from './inputParser';
import * as jeeves from '../services/jeeves';
import * as bone from '../services/bone';
import * as martinez from '../services/martinez';
import * as bronas from '../services/bronas';
import * as boegivar from '../services/boegivar';
import * as tourettes from '../services/tourettes';

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
        const user = message.user || {};
        const reply = jeeves.getGreeting(user.firstName);
        bot.sendMessage(message.chat, reply);
      } else if (inputParser.isAskingForBone(text)) {
        const reply = bone.sayBone();
        bot.sendMessage(message.chat, reply);
      } else if (inputParser.isAskingForMartinez(text)) {
        const reply = martinez.sayMartinez();
        bot.sendMessage(message.chat, reply);
      } else if (inputParser.isAskingForBronas(text)) {
        const reply = bronas.sayBronas();
        bot.sendMessage(message.chat, reply);
      } else if (inputParser.isAskingForBoegivar(text)) {
        const user = message.user || {};
        const reply = boegivar.sayBoegivar(user.firstName);
        bot.sendMessage(message.chat, reply);
      } else if (inputParser.isAskingForTourettes(text)) {
        const reply = tourettes.sayTourettes(text);
        bot.sendMessage(message.chat, reply);
      } else if (inputParser.isAskingForRandom(text)) {
        const reply = jeeves.getFucker();
        bot.sendMessage(message.chat, reply);
      }

      const reply = jeeves.getHelp();
      bot.sendMessage(message.chat, reply);
    },
  };
}
