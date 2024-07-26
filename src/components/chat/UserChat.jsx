import React from 'react';
import { useFetchRecipientUser } from '../../hook/useFetchRecipient';
import { useChatContext } from '../../context/ChatContext';
import {Conversation,Avatar} from '@chatscope/chat-ui-kit-react';

const UserChat = ({ message, user }) => {
  const { recipientUser } = useFetchRecipientUser(message, user);
  const { onlineUsers } = useChatContext();

  console.log('recipientUser', recipientUser);

  // To check if a user is online
  const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

  return (
    <>
                <Conversation
                  info='Yes, I can do it for you'
                  lastSenderName='Lilly'
                  name={recipientUser?.username}
                  style={{ textAlign: 'start' }}
                  className='single-user'
                 
                >
                  <Avatar
                    name={recipientUser?.username}
                    src='https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg'
                    style={{ borderColor: '#003b6d' }}
                  />
                
                </Conversation>
      {/* <div>
      <Avatar
      name={recipientUser?.username}
      src='https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg'
      style={{ borderColor: '#003b6d' }}
      />
      <div>
      <p>Recipient: {recipientUser?.username}</p>
        
        </div>
      </div> */}

      {/* <div>
        <p className={isOnline? "user-online" : ""}>online</p>
        <p>date</p>
        <p>notification</p>
      </div> */}
    </>
  );
};

export default UserChat;
