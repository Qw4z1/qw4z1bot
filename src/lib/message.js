export default class Message {
  
  constructor(msg) {
    this.from = msg.from;
    this.text = msg.text;
    this.user = msg.user;
    this.chat = msg.chat;
  }
  
  static mapMessage({ from, text, chat }) {
    return {
      from: from.id,
      text: text,
      chat: chat.id,
      user: {
        firstName: from.first_name,
        lastName: from.last_name
      }
    }
  }
}
