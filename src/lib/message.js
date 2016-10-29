export default function messageFactory({ from, text, chat, new_chat_member, left_chat_member }) {
  return {
    from: from.id,
    text,
    chat: chat.id,
    user: {
      firstName: from.first_name,
      lastName: from.last_name,
    },
    newChatMember: {
      id: new_chat_member.id,
      firstName: new_chat_member.first_name,
      lastName: new_chat_member.last_name,
    },
    leftChatMember: {
      id: left_chat_member.id,
      firstName: left_chat_member.first_name,
      lastName: left_chat_member.last_name,
    },
  };
}
