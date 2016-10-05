import TelegramBot from 'node-telegram-bot-api';
import Message from './message';
import config from '../config';
import InputParser from './inputParser';
import handlers from '../handlers';

const inputParser = new InputParser();

export default class Messenger {

  constructor() {
    console.log("Tests");
    if (process.env.NODE_ENV === 'production') {
      this.bot = new TelegramBot(config.telegram.token, { webHook: { port: config.telegram.port, host: config.telegram.host } });
      this.bot.setWebHook(config.telegram.externalUrl + ':443/bot' + config.telegram.token);
    } else {
      this.bot = new TelegramBot(config.telegram.token, { polling: true });
    }

  }

  listen() {
    this.bot.on('text', this.handleText.bind(this));
    return Promise.resolve();
  }

  handleText(msg) {
    console.log("Incoming message: " + msg.text);
    //format the message
    const message = new Message(Message.mapMessage(msg));
    const text = message.text.toLowerCase();
    console.log("Parsed message: " + message.text);

    //checking if asked "/start"
    if (inputParser.isAskingForGreeting(text)) {
      return handlers.command.getGreeting(message, this.bot);
    }
    //checking if asked "/böne"
    if (inputParser.isAskingForBone(text)) {
      return handlers.command.getBone(message, this.bot);
    }

    //checking if asked "/martinez"
    if (inputParser.isAskingForMartinez(text)) {
      return handlers.command.getMartinez(message, this.bot);
    }

    //checking if asked "/bronas"
    if (inputParser.isAskingForBronas(text)) {
      return handlers.command.getBronas(message, this.bot);
    }

    //checking if asked "/boegivar"
    if (inputParser.isAskingForBoegivar(text)) {
      return handlers.command.getBoegivar(message, this.bot);
    }

    //checking if asked "/tourettes" - orly?
    if (inputParser.isAskingForTourettes(text)) {
      return handlers.command.getTourettes(message, this.bot);
    }

    //checking if spelled any command wrong
    if (inputParser.isAskingForRandom(text)) {
      console.log('is asking for random');
      return handlers.command.getFucker(message, this.bot);
    }
    // default - send message with help
    return handlers.command.getHelp(message, this.bot);
  }
}
