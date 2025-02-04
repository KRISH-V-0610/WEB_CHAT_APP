import React,{useEffect} from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageSkeleton from './skeletons/MessageSkeleton'
import MessageInput from './MessageInput'
const ChatContainer = () => {

  const {messages,isMessagesLoading,selectedUser,getMessages} = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id,getMessages]);

  if(isMessagesLoading)
  {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }
  

  return (

      <div className="flex-1 flex flex-col overflow-auto">

          <ChatHeader />

          <MessageInput />



      </div>
  )
}

export default ChatContainer