import Bone from '../services/bone';
import Bronas from '../services/bronas';
import Martinez from '../services/martinez';
import Boegivar from '../services/boegivar';
import Tourettes from '../services/tourettes';
//import statistical from '../services/statistical';

const bone = new Bone();
const bronas = new Bronas();
const martinez = new Martinez();
const boegivar = new Boegivar();
const tourettes = new Tourettes();

export default class Command {
//  getStats(message, bot) {
//    bot.sendMessage(message.chat, '??? is the magic number');
//  }

  getGreeting(message, bot) {
    const reply = 'Hi, there! It is nice to see you here, ' + message.user.firstName + '! I\'m Qw4z1Bot, but you can call me Boegivar.';
    bot.sendMessage(message.chat, reply);
  }

  getBone(message, bot) {
    const text = bone.sayBone();
    bot.sendMessage(message.chat, text);
  }

  getBronas(message, bot) {
    const text = bronas.sayBronas();
    bot.sendMessage(message.chat, text);
  }

  getMartinez(message, bot) {
    const text = martinez.sayMartinez();
    bot.sendMessage(message.chat, text);
  }

  getHelp(message, bot) {
    bot.sendMessage(message.chat, 'You can call me Boegivar.');
  }

  getBoegivar(message, bot) {
    const text = boegivar.sayBoegivar(message);
    bot.sendMessage(message.chat, text);
  }

  getFucker(message, bot) {
    console.log('get fucker');
    bot.sendMessage(message.chat, 'Hey faggot! Yes, you... Go fuck yourself.');
  }

  getTourettes(message, bot) {
    const text = tourettes.sayTourettes(message);
    bot.sendMessage(message.chat, text);
  }

}
