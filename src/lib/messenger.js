import Message from './message';
import InputParser from './inputParser';
import { commands } from '../handlers/inputHandler';

const inputParser = new InputParser();

export default class Messenger {

  constructor(bot) {
    this.bot = bot;
    this.handleText = this.handleText.bind(this);
  }

  listen() {
    this.bot.on('text', this.handleText);
    return Promise.resolve();
  }

  handleText(msg) {
    const message = new Message(Message.mapMessage(msg));
    const text = message.text.toLowerCase();

    if (inputParser.isAskingForGreeting(text)) {
      return commands.getGreeting(message, this.bot);
    }

    if (inputParser.isAskingForBone(text)) {
      return commands.getBone(message, this.bot);
    }

    if (inputParser.isAskingForMartinez(text)) {
      return commands.getMartinez(message, this.bot);
    }

    if (inputParser.isAskingForBronas(text)) {
      return commands.getBronas(message, this.bot);
    }

    if (inputParser.isAskingForBoegivar(text)) {
      return commands.getBoegivar(message, this.bot);
    }

    if (inputParser.isAskingForTourettes(text)) {
      return commands.getTourettes(message, this.bot);
    }

    // TODO ...
    if (inputParser.isAskingForRandom(text)) {
      return commands.getFucker(message, this.bot);
    }

    return commands.getHelp(message, this.bot);
  }
}
