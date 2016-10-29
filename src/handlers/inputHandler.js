import * as jeeves from '../services/jeeves';
import * as bone from '../services/bone';
import * as martinez from '../services/martinez';
import * as bronas from '../services/bronas';
import * as boegivar from '../services/boegivar';
import * as tourettes from '../services/tourettes';
import * as memberactivity from '../services/memberactivity';

export function handleBoegivar(bot, chatId, userFirstName) {
  const reply = boegivar.sayBoegivar(userFirstName);
  bot.sendMessage(chatId, reply);
}

export function handleBone(bot, chatId) {
  const reply = bone.sayBone();
  bot.sendMessage(chatId, reply);
}

export function handleBronas(bot, chatId) {
  const reply = bronas.sayBronas();
  bot.sendMessage(chatId, reply);
}

export function handleGreeting(bot, chatId, userFirstName) {
  const reply = jeeves.getGreeting(userFirstName);
  bot.sendMessage(chatId, reply);
}

export function handleMartinez(bot, chatId) {
  const reply = martinez.sayMartinez();
  bot.sendMessage(chatId, reply);
}

export function handleRandom(bot, chatId) {
  const reply = jeeves.getFucker();
  bot.sendMessage(chatId, reply);
}

export function handleTourettes(bot, chatId, text) {
  const reply = tourettes.sayTourettes(text);
  bot.sendMessage(chatId, reply);
}

export function handleNewChatMember(bot, chatId, activity) {
  const reply = memberactivity.sayHello(activity);
  bot.sendMessage(chatId, reply);
}

export function handleLeftChatMember(bot, chatId, activity) {
  const reply = memberactivity.sayGoodbye(activity);
  bot.sendMessage(chatId, reply);
}

export function handleHelp(bot, chatId) {
  const reply = jeeves.getHelp();
  bot.sendMessage(chatId, reply);
}
