import messengerFactory from './lib/messenger';
import config from './config';

function createBot() {
  if (process.env.NODE_ENV === 'production') {
    const bot = new TelegramBot(
      config.telegram.token,
      {
        webHook: {
          port: config.telegram.port,
          host: config.telegram.host,
        },
      }
      );
    bot.setWebHook(`${config.telegram.externalUrl}:443/bot${config.telegram.token}`);
    return bot;
  }
  return new TelegramBot(config.telegram.token, { polling: true });
}

const telegram = messengerFactory(createBot());

telegram.listen().then(() => console.log('Listening'));
