import expect from 'expect';
import Message from '../message';

describe('Message', () => {
  it('sets properties on self from passed message', () => {
    const msg = {
      from: 'from',
      text: 'text',
      user: 'user',
      chat: 'chat',
    };
    const message = new Message(msg);
    expect(message.from).toBe(msg.from);
    expect(message.text).toBe(msg.text);
    expect(message.user).toBe(msg.user);
    expect(message.chat).toBe(msg.chat);
  });

  describe('mapMessage', () => {
    it('returns a new object with metainfo mapped from messgae', () => {
      const msg = {
        from: {
          id: 'user id',
          first_name: 'first name',
          last_name: 'last name',
        },
        text: 'text',
        chat: { id: 'chat id' },
        user: 'user',
      };
      const mappedMessage = Message.mapMessage(msg);
      expect(mappedMessage.from).toBe(msg.from.id);
      expect(mappedMessage.text).toBe(msg.text);
      expect(mappedMessage.chat).toBe(msg.chat.id);
      expect(mappedMessage.user).toEqual({
        firstName: msg.from.first_name,
        lastName: msg.from.last_name,
      });
    });
  });
});
