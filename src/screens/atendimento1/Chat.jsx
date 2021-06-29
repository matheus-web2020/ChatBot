import MessageSender from '../../components/chat/chat1/MessageSender';
import Messages from '../../components/chat/chat1/Messages';
import useMessages from '../../hooks/useMessages1';

import './Chat.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat