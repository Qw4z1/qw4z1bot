import expect from 'expect';
import messageFactory from '../message';

describe('message', () => {
  const msg = {
    from: {
      id: 'user id',
      first_name: 'first name',
      last_name: 'last name',
    },
    text: 'text',
    chat: { id: 'chat id' },
  };

  it('returns a new object with metainfo mapped from messgae', () => {
    const mappedMessage = messageFactory(msg);
    expect(mappedMessage.from).toBe(msg.from.id);
    expect(mappedMessage.text).toBe(msg.text);
    expect(mappedMessage.chat).toBe(msg.chat.id);
    expect(mappedMessage.user).toEqual({
      firstName: msg.from.first_name,
      lastName: msg.from.last_name,
    });
  });
});
