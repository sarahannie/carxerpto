import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { baseUrl, getRequest, postRequest } from '../utils/chatUtils';
import { io } from 'socket.io-client';

const ChatContext = createContext();

export const useChatContext = () => {
  return useContext(ChatContext);
};

export const ChatContextProvider = ({ children, user }) => {
  const [messages, setMessages] = useState([]); // userChats
  const [chatLoading, setChatLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);
  const [otherChats, setOtherChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [userMessages, setUserMessages] = useState(null);
  const [messageLoading, setMessageLoading] = useState(false);
  const [msgError, setMsgError] = useState(null);
  const [sendTextMsgError, setSendTextMsgError] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  console.log(`usM:`, userMessages);
  console.log('onlineUsers: ', onlineUsers);
  console.log('user', user);


  // CONNECT SOCKET-IO
  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Clean up
    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // TRIGGER SOCKET-IO EVENT CONNECTION TO ADD ONLINE USERS
  useEffect(() => {
    if (socket === null) return;
    socket.emit('addNewUser', user?._id);

    // Listen to event and update the onlineUsers with available user (res)
    socket.on('getOnlineUsers', (res) => {
      setOnlineUsers(res);
    });

    return () => {
      socket.off('getOnlineUsers');
    };
  }, [socket]);

  // SEND MESSAGE
  useEffect(() => {
    if (socket === null) return;

    const recipientId = currentChat?.members.find((id) => id !== user?._id);

    socket.emit('sendMessage', { ...newMessage, recipientId });
  }, [newMessage]);

  // RECEIVE MESSAGE
  useEffect(() => {
    if (socket === null) return;

    socket.on('getMessage', (res) => {
      if (currentChat?._id !== res.chatId) {
        return;
      }

      setUserMessages((prev) => [...prev, res]);
    });

    return () => {
      socket.off('getMessage');
    };
  }, [socket, currentChat]);

  // GET USER CHATS
  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setChatLoading(true);

        setUserChatsError(null);

        const response = await getRequest(`${baseUrl}/chat/finduserchats/${user?._id}`);

        setChatLoading(false);

        if (response.error) {
          return setUserChatsError(response);
        }

        setMessages(response.responseMessage);
      } else {
        console.log('no user found');
      }
    };

    getUserChats();
  }, [user]);

  // GET USERS
  useEffect(() => {
    // Get other users
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/buyer/allusers`);

      if (response.error) {
        return console.log('Error caught', response);
      }

      const potentialChat = response.responseMessage.sellers.filter((u) => {
        let isCreatedChat = false;

        // check if the user is inside the user list from the db
        if (user?._id === u._id) return false;

        // check if chat is created. the some method returns Boolean
        if (messages) {
          isCreatedChat = messages?.some((chat) => {
            return chat.members[0] === u._id || chat.members[1] === u._id;
          });
        }

        return !isCreatedChat;
      });
      setOtherChats(potentialChat);
    };

    getUsers();
  }, [messages]);

  // GET MESSAGES
  useEffect(() => {
    const getMessages = async () => {
      setMessageLoading(true);

      setMsgError(null);

      const response = await getRequest(`${baseUrl}/message/getmessage/${currentChat?._id}`);

      setMessageLoading(false);

      if (response.error) {
        return setMsgError(response);
      }

      setUserMessages(response.responseMessage);
    };

    getMessages();
  }, [currentChat]);

  // ADD MESSAGE
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // CREATE NEW CHAT
  const createChat = useCallback(async (firstId, secondId) => {
    const response = await postRequest(
      `${baseUrl}/chat/createchat`,
      JSON.stringify({ firstId, secondId })
    );

    if (response.error) {
      return console.log('Error creating chat', response);
    }

    setMessages((prev) => [...prev, response.responseMessage]);
  }, []);

  // UPDATE CHAT-BOX
  const updateCurrentChat = useCallback(async (chat) => {
    setCurrentChat(chat);
  }, []);

  // SEND TEXT MESSAGE
  const sendMessage = useCallback(async (textMessage, sender, currentChatId, setTextMessage) => {
    if (!textMessage) return console.log("Can't send empty message!");

    const response = await postRequest(
      `${baseUrl}/message/createmessage`,
      JSON.stringify({
        chatId: currentChatId,
        senderId: sender._id,
        text: textMessage
      })
    );

    if (response.error) {
      return setSendTextMsgError(response);
    }

    setNewMessage(response.responseMessage);

    setUserMessages((prev) => [...prev, response.responseMessage]);

    setTextMessage('');
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        user,
        chatLoading,
        setChatLoading,
        userChatsError,
        setUserChatsError,
        otherChats,
        createChat,
        currentChat,
        updateCurrentChat,
        userMessages,
        messageLoading,
        msgError,
        sendMessage,
        onlineUsers
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
