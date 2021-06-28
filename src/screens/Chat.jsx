import MessageSender from '../components/chat/MessageSender';
import Messages from '../components/chat/Messages';
import useMessages from '../hooks/useMessages';

import './Chat.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat