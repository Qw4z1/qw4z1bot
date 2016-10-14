import Messenger from './lib/messenger';
import config from './config';

let bot;

if (process.env.NODE_ENV === 'production') {
  bot = new TelegramBot(config.telegram.token, { webHook: { port: config.telegram.port, host: config.telegram.host } });
  bot.setWebHook(config.telegram.externalUrl + ':443/bot' + config.telegram.token);
} else {
  bot = new TelegramBot(config.telegram.token, { polling: true });
}

const telegram = new Messenger(bot);

telegram.listen().then(() => { console.log('Listening'); });
