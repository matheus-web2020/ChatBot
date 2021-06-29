import MessageSender from '../../components/chat/chat2/MessageSender2';
import Messages from '../../components/chat/chat2/Messages2';
import useMessages from '../../hooks/useMessages2';

import './Chat2.scss'
2
function Chat () {
  const { messages } = useMessages()

  return <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat