import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import chatApi from '../api/chatApi';

const initialState = {
  user1: 'user1',
  user2: 'user2',
  messages: [],
  status: 'idle',
  error: null
};

export const messageStatus = {
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read'
};

export const fetchMessageHistory = createAsyncThunk(
  'chat/fetchMessageHistory',
  async ({ user1, user2 }) => {
    const response = await fetchBaseQuery({
      url: `/chats/${user1}/${user2}`,
      method: 'GET',
      baseUrl: 'https://auto-buy-api.vercel.app/'
    });
    return response.data;
  }
);

export const sendMessage = createAsyncThunk('chat/sendMessage', async (message) => {
  const response = await fetchBaseQuery({
    url: '/chats',
    method: 'POST',
    body: message,
    baseUrl: 'https://auto-buy-api.vercel.app/'
  });
  return response.data;
});

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    messageReceived: (state, action) => {
      state.messages.push(action.payload);
    },
    updateMessageStatus: (state, action) => {
      const { messageId, status } = action.payload;
      const messageToUpdate = state.messages.find((message) => message.id === messageId);
      if (messageToUpdate) {
        messageToUpdate.status = status;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessageHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessageHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(fetchMessageHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { messageReceived, updateMessageStatus } = chatSlice.actions;

export default chatSlice.reducer;
