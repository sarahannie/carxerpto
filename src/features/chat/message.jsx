import React from 'react';
import ChatBox from '../../components/chat/ChatBox'; 
import DashboardNavbar from '../../seller/widgets/layout/dashboard-navbar';
import Sidenav from '../../seller/widgets/layout/sidenav';
import {MainContainer} from '@chatscope/chat-ui-kit-react';
import OtherChats from '../../components/chat/OtherChats';



const Chat = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className='flex flex-row overflow-hidden'>
        <Sidenav />
        <div
          className='mt-7 w-[90%] lg:ml-[20%] ml-[15px] lg:mr-10px mr-1px border rounded-lg shadow-md bg-white'
          style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <MainContainer
            responsive
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100vh',
            }}
          >
            {/* Chat side bar */}
            <OtherChats />

              {/* MainChat box */}
            <ChatBox />
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Chat;


// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMessageHistory, sendMessage, messageReceived } from '../../app/slice/chatSlice';
// import io from 'socket.io-client';
// import DashboardNavbar from '../../seller/widgets/layout/dashboard-navbar';
// import Sidenav from '../../seller/widgets/layout/sidenav';
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   Sidebar,
//   Search,
//   ConversationList,
//   Conversation,
//   Avatar,
//   ConversationHeader,
//   VoiceCallButton,
//   VideoCallButton,
//   InfoButton,
//   TypingIndicator,
// } from '@chatscope/chat-ui-kit-react';
// import './message.css';

// const socket = io('https://autobuy-server.onrender.com');

// const Messages = () => {
//   const dispatch = useDispatch();
//   const messages = useSelector((state) => state.chat.messages);
//   const [message, setMessage] = useState('');
// console.log('message', message)
//   useEffect(() => {
//     socket.emit('joinRoom', { buyerId: 'user1', sellerId: 'user2' });

//     socket.on('newMessage', (message) => {
//       dispatch(messageReceived(message));
//     });

//     dispatch(fetchMessageHistory({ user1: 'user1', user2: 'user2' }));
//   }, [dispatch]);

//   const handleSendMessage = () => {
//     const newMessage = {
//       buyerId: 'user1',
//       sellerId: 'user2',
//       senderId: 'user1',
//       senderModel: 'User',
//       message,
//     };

//     socket.emit('sendMessage', newMessage);
//     dispatch(sendMessage(newMessage));
//     setMessage('');
//   };

//   return (
//     <div>
//       <DashboardNavbar />
//       <div className='flex flex-row overflow-hidden'>
//         <Sidenav />
//         <div
//           className='mt-7 w-[90%] lg:ml-[20%] ml-[15px] lg:mr-10px mr-1px border rounded-lg shadow-md'
//           style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
//         >
//           <MainContainer
//             responsive
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               height: '100vh',
//             }}
//           >
//             <Sidebar
//               position='left'
//               style={{
//                 flexShrink: 0,
//                 width: '25%',
//                 height: '100vh',
//                 backgroundColor: 'white',
//                 borderRight: '1px solid #003b6d',
//               }}
//             >
//               <Search
//                 placeholder='Search...'
//                 style={{
//                   backgroundColor: '#003b6d',
//                   color: '#003b6d',
//                   border: '1px solid #003b6d',
//                   borderRadius: '8px',
//                   padding: '8px',
//                 }}
//                 inputStyle={{
//                   color: '#003b6d',
//                   border: 'none',
//                   outline: 'none',
//                   backgroundColor: 'white',
//                 }}
//                 iconStyle={{
//                   color: '#003b6d !default',
//                   backgroundColor: '#003b6d',
//                 }}
//               />
//               <ConversationList style={{ height: 'calc(100vh - 48px)' }}>
//                 <Conversation
//                   info='Yes, I can do it for you'
//                   lastSenderName='Lilly'
//                   name='Lilly'
//                   style={{ textAlign: 'start' }}
//                 >
//                   <Avatar
//                     name='Lilly'
//                     src='https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg'
//                     style={{ borderColor: '#003b6d' }}
//                   />
//                 </Conversation>
//               </ConversationList>
//             </Sidebar>

//             <ChatContainer style={{ flex: 1, height: '100vh', backgroundColor: 'white' }}>
//               <ConversationHeader>
//                 <ConversationHeader.Back />
//                 <Avatar
//                   name='Zoe'
//                   src='https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg'
//                   style={{ borderColor: '#003b6d' }}
//                 />
//                 <ConversationHeader.Content info='Active 10 mins ago' userName='Zoe' />
//                 <ConversationHeader.Actions>
//                   <VoiceCallButton style={{ color: '#003b6d' }} />
//                   <VideoCallButton style={{ color: '#003b6d' }} />
//                   <InfoButton style={{ color: '#003b6d' }} />
//                 </ConversationHeader.Actions>
//               </ConversationHeader>

//               <MessageList
//                 typingIndicator={<TypingIndicator content='Zoe is typing' />}
//                 style={{ height: 'calc(100vh - 128px)' }}
//               >
//                 {messages?.map((msg, index) => (
//                   <Message
//                     key={index}
//                     model={{
//                       direction: msg.sender === 'user1' ? 'outgoing' : 'incoming',
//                       message: msg.message,
//                       position: 'single',
//                       sender: msg.senderModel,
//                       sentTime: new Date(msg.timestamp).toLocaleTimeString(),
//                     }}
//                   >
//                     <Avatar
//                       name={msg.senderModel}
//                       src={msg.senderModel === 'User' ? 'user-avatar-url' : 'seller-avatar-url'}
//                       style={{ borderColor: '#003b6d' }}
//                     />
//                   </Message>
//                 ))}
//               </MessageList>

//               <MessageInput
//                 placeholder='Type message here'
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onSend={handleSendMessage}
//                 style={{
//                   height: '48px',
//                   backgroundColor: 'white',
//                   color: '#003b6d',
//                   borderColor: '#003b6d',
//                   textAlign: 'start',
//                 }}
//               />
//             </ChatContainer>
//           </MainContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;

// import React, { useState, useEffect, useContext } from 'react';
// import io from 'socket.io-client';
// import { ChatContext } from '../../context/ChatContext';

// // const socket = io('https://api-v1.carxperto.com/');
// // const socket = io('https://localhost:5000');

// const Chat = () => {
//   const {
//     userChats,
//     chatLoading,
//     userChatsError,
//     setUserChats,
//     setChatLoading,
//     setUserChatsError
//   } = useContext(ChatContext);

//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const currentUser = 'user1'; // Replace with actual user ID

//   // useEffect(() => {
//   //   // Listen for incoming messages
//   //   socket.on('message', (message) => {
//   //     setMessages((prevMessages) => [...prevMessages, message]);
//   //   });

//   //   // Clean up event listener on component unmount
//   //   return () => {
//   //     socket.off('message');
//   //   };
//   // }, []); // Empty dependency array ensures the effect runs only once

//   const sendMessage = (e) => {
//     e.preventDefault(); // Prevent form submission

//     if (message.trim() !== '') {
//       // Emit message to the server
//       // socket.emit('message', { sender: currentUser, message });
//       setMessage(''); // Clear message input
//     }
//   };

//   return (
//     <div className='p-4 bg-gray-100'>
//       <div className='max-w-md mx-auto bg-white rounded-lg shadow-md'>
//         <div className='p-4'>
//           <h1 className='text-lg font-semibold mb-2'>Chat</h1>
//           <div className='flex flex-col space-y-4'>
//             {/* Display chat messages */}
//             <div className='flex flex-col space-y-2'>
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`p-2 rounded-lg ${
//                     msg.sender === currentUser ? 'bg-blue-200' : 'bg-gray-200'
//                   }`}
//                 >
//                   <p className='text-sm'>
//                     {msg.sender}: {msg.message}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Message input */}
//             <form className='flex space-x-2' onSubmit={sendMessage}>
//               <input
//                 type='text'
//                 value={message}
//                 name={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className='flex-1 rounded-lg border-gray-300 px-4 py-2'
//                 placeholder='Type your message...'
//               />
//               <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;

// import React from 'react';
// import { useChatContext } from '../../context/ChatContext.jsx';
// import UserChat from '../../components/chat/UserChat.jsx';
// import OtherChats from '../../components/chat/OtherChats.jsx';
// import ChatBox from '../../components/chat/ChatBox.jsx';

// const Chat = () => {
//   const { messages, user, chatLoading, updateCurrentChat } = useChatContext();

//   return (
//     <div className='p-4 bg-gray-100'>
//       <div className='max-w-md mx-auto bg-white rounded-lg shadow-md'>
//         <div className='p-4'>
//           <h1 className='text-lg font-semibold mb-2'>Chats</h1>

//           <div className='flex flex-col space-y-4'>
//             {/* Display chat messages. This should be on the left side */}

//             <div>
//               <OtherChats />
//             </div>

//             {/* Display chat messages. This should be on the right side */}

//             <div className='flex flex-col space-y-2'>
//               {messages?.length < 1 ? null : (
//                 <>
//                   {chatLoading && <p>Loading chat...</p>}
//                   {/* {messages.map((message, index) => (
//                     <div
//                       key={index}
//                       onClick={() => updateCurrentChat(message)}
//                       className={`p-2 rounded-lg ${message.sender ? 'bg-blue-200' : 'bg-gray-200'}`}
//                     >
//                       <UserChat message={message} user={user} />
//                     </div>
//                   ))} */}

//                   <div>
//                     <ChatBox />
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
