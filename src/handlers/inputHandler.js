import { bone } from '../services/bone';
import { bronas } from '../services/bronas';
import { martinez } from '../services/martinez';
import { boegivar } from '../services/boegivar';
import { tourettes } from '../services/tourettes';

export const commands = {
  getGreeting(message, bot) {
    const reply = `Hallåå ${message.user.firstName}! Ja' é Qw4z1Bot, men kalla mig Boegivar.`;
    bot.sendMessage(message.chat, reply);
  },

  getBone(message, bot) {
    const reply = bone.sayBone();
    bot.sendMessage(message.chat, reply);
  },

  getBronas(message, bot) {
    const reply = bronas.sayBronas();
    bot.sendMessage(message.chat, reply);
  },

  getMartinez(message, bot) {
    const reply = martinez.sayMartinez();
    bot.sendMessage(message.chat, reply);
  },

  getHelp(message, bot) {
    const reply = `Available commands:
/böne
/martinez
/bronas
/boegivar
/tourettes
`;
    bot.sendMessage(message.chat, reply);
  },

  getBoegivar(message, bot) {
    const reply = boegivar.sayBoegivar(message.user.firstName);
    bot.sendMessage(message.chat, reply);
  },

  getFucker(message, bot) {
    bot.sendMessage(message.chat, 'Hallå där din knickedick! Tryck upp en sjöpall i stolgången din jävla dagslända!');
  },

  getTourettes(message, bot) {
    const reply = tourettes.sayTourettes(message.text);
    bot.sendMessage(message.chat, reply);
  },
};
