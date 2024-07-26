import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slice/authSlice';
import chatSlice from './slice/chatSlice';
import { authApi } from './api/authApi';
import { chatApi } from './api/chatApi';
import { sellerAuthApi } from './api/sellerAuthApi';
import { signinAuthApi } from './api/signinAuthApi';
import { productApi } from './api/productApi';
import { buyerProductApi } from './api/buyerProductApi';
import {brokerAuthApi} from './api/brokerAuthApi'
import filterSlice from './slice/filterSlice';


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [sellerAuthApi.reducerPath]: sellerAuthApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [signinAuthApi.reducerPath]: signinAuthApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [buyerProductApi.reducerPath]: buyerProductApi.reducer,
    [brokerAuthApi.reducerPath]: brokerAuthApi.reducer,
    auth: authSlice,
    chat: chatSlice,
    filters: filterSlice,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, chatApi.middleware, sellerAuthApi.middleware, signinAuthApi.middleware, productApi.middleware, buyerProductApi.middleware, brokerAuthApi.middleware),
});

setupListeners(store.dispatch);

export default store;
