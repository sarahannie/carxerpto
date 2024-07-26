import React, { useEffect } from 'react';
import { useChatContext } from '../../context/ChatContext';
// import './OtherChat.css'; 
import {
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar, 
} from '@chatscope/chat-ui-kit-react';
import UserChat from '../../components/chat/UserChat.jsx';
const OtherChats = () => {
  const { otherChats, createChat, user, onlineUsers, messages, chatLoading, updateCurrentChat } = useChatContext();
  // useEffect(() => {
  //   console.log('otherChats', otherChats)
  // })

  console.log('otherChats', messages)
  console.log('updateCurrentChat', updateCurrentChat)

  return (
    < >
      {/* {otherChats &&
        otherChats.map((u, index) => (
          <div
            className='single-user '
            key={index}
            onClick={() => createChat(user._id, u._id)}
          >
            <span className='user-name'>Online users: {u?.username}</span>
            <span
              className={
                onlineUsers?.some((onlineUser) => onlineUser?.userId === u?._id) ? 'user-online' : 'user-offline'
              }
            ></span>
          </div>
        ))} */}
        <Sidebar
              position='left'
              style={{
                flexShrink: 0,
                width: '25%',
                height: '100vh',
                backgroundColor: 'white',
                borderRight: '1px solid #003b6d'
              }}
            >
              <Search
                placeholder='Search...'
                style={{
                  backgroundColor: '#003b6d',
                  color: '#003b6d',
                  border: '1px solid #003b6d',
                  borderRadius: '8px',
                  padding: '10px',
                }}
                inputStyle={{
                  color: '#003b6d',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'white',
                  padding: '12px',
                }}
                iconStyle={{
                  color: '#003b6d !default',
                  backgroundColor: '#003b6d',
                }}
              />
              
              {messages.map ((u, index)=>(
                <ConversationList style={{ height: 'calc(100vh - 570px)' }}>
                  <div
                  onClick={() => updateCurrentChat(u)}
                  key={index}
                > 
                  <UserChat message={u} user={user} />
                </div>
                </ConversationList>
              ))}
        </Sidebar>

            
    </>
  );
};

export default OtherChats;