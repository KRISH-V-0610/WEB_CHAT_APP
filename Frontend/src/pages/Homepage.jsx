import React from 'react'
import {useChatStore} from '../store/useChatStore.js';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';
import NoChatSelected from '../components/NoChatSelected';

const Homepage = () => {

  const { messages,users,isUsersLoading,isMessagesLoading,selectedUser,getUsers,getMessages } = useChatStore();

  return (
    <div className="h-screen bg-base-200 ">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 w-full shadow-xl rounded-lg max-w-6xl h-[calc(100vh-8rem)]">
           <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar/>
            {!selectedUser  ? <NoChatSelected/> : <ChatContainer/>}
           </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage