import React, { useState } from 'react';
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput,Sidebar,Search,ConversationList,Conversation,Avatar,MessageSeparator,TypingIndicator,InfoButton,VideoCallButton,VoiceCallButton,ConversationHeader } from '@chatscope/chat-ui-kit-react';
import './message.css'


export function Messages() {


  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
      <div className='mt-7 w-[90%] lg:ml-[20%] ml-[15px] lg:mr-10px mr-1px border rounded-lg shadow-md' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MainContainer
        responsive
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100vh',
        }}
      >
        <Sidebar
          position="left"
          style={{
            flexShrink: 0,
            width: '25%',
            height: '100vh',
            backgroundColor: 'white',
            borderRight: `1px solid #003b6d`,
          }}
        >
          <Search
            placeholder="Search..."
            style={{
              backgroundColor: '#003b6d',
              color: '#003b6d',
              border: `1px solid #003b6d`,
              borderRadius: '8px',
              padding: '8px',
            }}
            inputStyle={{
              color: '#003b6d',
              border: 'none',
              outline: 'none',
              backgroundColor: 'white',
            }}
            iconStyle={{
              color: '#003b6d !default',
              backgroundColor: '#003b6d',
            }}
          />
          <ConversationList style={{ height: 'calc(100vh - 48px)' }}>
            {/* Add conversations */}
            <Conversation
              info="Yes, I can do it for you"
              lastSenderName="Lilly"
              name="Lilly"
              style={{  textAlign:'start' }}
            >
              <Avatar
                name="Lilly"
                src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
                style={{ borderColor: '#003b6d'}}
              />
            </Conversation>
          </ConversationList>
        </Sidebar>

        <ChatContainer style={{ flex: 1, height: '100vh', backgroundColor: 'white' }}>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              name="Zoe"
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              style={{ borderColor: '#003b6d' }}
            />
            <ConversationHeader.Content
              info="Active 10 mins ago"
              userName="Zoe"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton style={{ color: '#003b6d' }} />
              <VideoCallButton style={{ color: '#003b6d' }} />
              <InfoButton style={{ color: '#003b6d' }} />
            </ConversationHeader.Actions>
          </ConversationHeader>

          <MessageList
            typingIndicator={<TypingIndicator content="Zoe is typing" />}
            style={{ height: 'calc(100vh - 128px)' }} // Adjust the height of the message list
          >
            {/* Add messages */}
            <MessageSeparator content="Saturday, 30 November 2024" style={{ color: '#003b6d' }} />
            {/* Customize message styles */}
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello John, are you done?',
                position: 'single',
                sender: 'Zoe',
                sentTime: '15 mins ago',
              }}
              style={{
                // backgroundColor: 'white', // Set message background color
                color: '#003b6d' // Set text color
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                style={{ borderColor: '#003b6d' }}
              />
            </Message>
            <Message
            model={{
              direction: 'outgoing',
              message: 'Not yet, what the deadline?',
              position: 'normal',
              sender: 'Patrik',
              sentTime: '15 mins ago'
            }}
          />
            <Message
              model={{
                direction: 'incoming',
                message: 'the deadline is friday, 30 November 2024',
                position: 'last',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
            </Message>
          </MessageList>

          <MessageInput
            placeholder="Type message here"
            style={{
              height: '48px',
              backgroundColor: 'white',
              color: '#003b6d',
              borderColor: '#003b6d',
              textAlign:'start',
            }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
    </div>
      
    </div>
   
  );
}

export default Messages;
// import React, { useState } from 'react';

// function Message() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = (event) => {
//     if (
//       !event.target.closest('#menuDropdown') &&
//       !event.target.closest('#menuButton')
//     ) {
//       setIsMenuOpen(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener('click', closeMenu);
//     return () => {
//       document.removeEventListener('click', closeMenu);
//     };
//   }, []);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white border-r border-gray-300">
//         {/* Sidebar Header */}
//         <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
//           <h1 className="text-2xl font-semibold">Chat Web</h1>
//           <div className="relative">
//             <button
//               id="menuButton"
//               onClick={toggleMenu}
//               className="focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-gray-100"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                 <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
//               </svg>
//             </button>
//             {/* Menu Dropdown */}
//             {isMenuOpen && (
//               <div
//                 id="menuDropdown"
//                 className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
//               >
//                 <ul className="py-2 px-3">
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">
//                       Option 1
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">
//                       Option 2
//                     </a>
//                   </li>
//                   {/* Add more menu options here */}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </header>
        
//         {/* Contact List */}
//         <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
//           {/* Example Contact */}
//           <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
//             <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
//               <img
//                 src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
//                 alt="User Avatar"
//                 className="w-12 h-12 rounded-full"
//               />
//             </div>
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">Alice</h2>
//               <p className="text-gray-600">Hoorayy!!</p>
//             </div>
//           </div>
//           {/* More contact list items */}
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1">
//         {/* Chat Header */}
//         <header className="bg-white p-4 text-gray-700">
//           <h1 className="text-2xl font-semibold">Alice</h1>
//         </header>

//         {/* Chat Messages */}
//         <div className="h-screen overflow-y-auto p-4 pb-36">
//           {/* Incoming Message */}
//           <div className="flex mb-4 cursor-pointer">
//             <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
//               <img
//                 src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
//                 alt="User Avatar"
//                 className="w-8 h-8 rounded-full"
//               />
//             </div>
//             <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
//               <p className="text-gray-700">Hey Bob, how's it going?</p>
//             </div>
//           </div>
//           {/* Other chat messages... */}
//         </div>

//         {/* Chat Input */}
//         <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Type a message..."
//               className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
//             />
//             <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
//               Send
//             </button>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Messages;

