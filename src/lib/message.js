export default function messageFactory({ from, text, chat }) {
  return {
    from: from.id,
    text,
    chat: chat.id,
    user: {
      firstName: from.first_name,
      lastName: from.last_name,
    },
  };
}
