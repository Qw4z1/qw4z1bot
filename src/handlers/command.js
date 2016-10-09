import Bone from '../services/bone';
import Bronas from '../services/bronas';
import Martinez from '../services/martinez';
import Boegivar from '../services/boegivar';
import Tourettes from '../services/tourettes';

const bone = new Bone();
const bronas = new Bronas();
const martinez = new Martinez();
const boegivar = new Boegivar();
const tourettes = new Tourettes();

export default class Command {

  getGreeting(message, bot) {
    const reply = 'Hallåå elle\'! Jävvlit skôj å se dig, ' + message.user.firstName + '! Jag é Qw4z1Bot, men kalla mig Boegivar.';
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
    bot.sendMessage(message.chat, 'Kalla mig Boegivar é du bôdi\'!');
  }

  getBoegivar(message, bot) {
    const text = boegivar.sayBoegivar(message);
    bot.sendMessage(message.chat, text);
  }

  getFucker(message, bot) {
    console.log('get fucker');
    bot.sendMessage(message.chat, 'Hallå där din knickedick! Tryck upp en sjöpall i stolgången din jävla dagslända!');
  }

  getTourettes(message, bot) {
    const text = tourettes.sayTourettes(message);
    bot.sendMessage(message.chat, text);
  }

}
