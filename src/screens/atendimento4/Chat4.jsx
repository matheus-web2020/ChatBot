import MessageSender from '../../components/chat/chat4/MessageSender4';
import Messages from '../../components/chat/chat4/Messages4';
import useMessages from '../../hooks/useMessages4';

import './Chat4.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat