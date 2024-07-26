import React, { useState } from 'react';
import { useChatContext } from '../../context/ChatContext';
import { useFetchRecipientUser } from '../../hook/useFetchRecipient';
import moment from 'moment';
import InputEmoji from 'react-input-emoji';
import {
  MessageInput,
  MessageList,
  Message,
  Avatar,
  TypingIndicator,
  VoiceCallButton,
  VideoCallButton,
  ConversationHeader,
  InfoButton,
  ChatContainer
} from '@chatscope/chat-ui-kit-react';
import { Spinner } from '@material-tailwind/react';
import { CustomSpinner } from '../../loading';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ChatBox = () => {
  const { user, currentChat, userMessages, messageLoading, sendMessage, isTyping } = useChatContext();
  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  const [textMessage, setTextMessage] = useState('');

  console.log(`recipient`, recipientUser);
  console.log(`usertext`, userMessages);
  console.log(`current`, currentChat);
  console.log(`currentss`, sendMessage);
  console.log(`user`, user);

  if (!recipientUser) return (<div className='flex flex-col justify-center items-center mx-auto bg-white w-full'>
    <ChatBubbleLeftRightIcon size={4} style={{ color: '#003b6d', fontSize: '16px', width: '180px', height: '180px'}}/>
    <p className='  text-2xl '>No conversation selected yet</p>
  </div>)

  if (messageLoading) return <p className='flex mx-auto  justify-center items-center bg-white w-full'><CustomSpinner/></p>;

  return (
    <>
    <ChatContainer style={{ flex: 1, height: '100vh', backgroundColor: 'white' }}>
      {/* <p> {recipientUser?.username} </p> */}
      <ConversationHeader>
        <ConversationHeader.Back />
        {' '}
        <Avatar
          name={recipientUser?.username}
          src={user.profilePhoto}
          style={{ borderColor: '#003b6d' }}
        />
        <ConversationHeader.Content info='Active 10 mins ago' userName={recipientUser?.username}/>
        <ConversationHeader.Actions>
          {/* <VoiceCallButton style={{ color: '#003b6d' }} />
          <VideoCallButton style={{ color: '#003b6d' }} /> */}
          <InfoButton style={{ color: '#003b6d' }} />
        </ConversationHeader.Actions>
      </ConversationHeader>

      
        <MessageList
          typingIndicator={
            isTyping && <TypingIndicator content={`${recipientUser?.username} is typing`} />
          }
          style={{ height: 'calc(100vh - 128px)' }}
        >
          {userMessages &&
            userMessages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  direction: msg.senderId === user._id ? 'outgoing' : 'incoming',
                  message: msg.text,
                  position: 'single',
                  sender: msg.senderModel,
                  sentTime: moment(msg.createdAt).calendar()
                }}
              >
                <Avatar
                  name={msg.senderModel}
                  src={msg.senderId === user._id ? `${user.profilePhoto}`: 'seller-avatar-url'}
                  style={{ borderColor: '#003b6d' }}
                />
              </Message>
            ))}
        </MessageList>
      

      
        <MessageInput
          placeholder='Type message here'
          fontFamily='nunito'
          value={textMessage}
          onClick={() => sendMessage(textMessage, user, currentChat._id, setTextMessage)}
          onChange={setTextMessage}
          onEnter={(message) => sendMessage(message, user, currentChat._id, setTextMessage)}
          cleanOnEnter
        />
        {/* <MessageInput
          value={textMessage}
          onChange={setTextMessage}
          fontFamily='nunito'
          borderColor='rgba(71,112,223,0.2)'
          placeholder='Type a message...'
          onEnter={(message) => sendMessage(message, user, currentChat._id, setTextMessage)}
          cleanOnEnter
        /> */}
        {/* <InputEmoji
            value={textMessage}
            onChange={setTextMessage}
            fontFamily='nunito'
            borderColor='rgba(71,112,223,0.2'
          />
          <button onClick={() => sendMessage(textMessage, user, currentChat._id, setTextMessage)}>
            Send
          </button> */}
      
      </ChatContainer>
    </>
  );
};

export default ChatBox;
