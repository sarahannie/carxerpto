import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for seller API
const BROKER_API_BASE_URL = 'https://autobuy-server.onrender.com/broker';
const baseQuery = fetchBaseQuery({
  baseUrl: BROKER_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const brokerAuthApi = createApi({
  reducerPath: 'sellerAuthApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
   
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      })
    }),
    register: builder.mutation({
      query: ({ email, password, firstName, lastName }) => ({
        url: '/register',
        method: 'POST',
        body: { email, password, firstName, lastName }
      })
    }),
    verifyEmail: builder.mutation({
      query: ({ otp }) => ({
        url: '/verification',
        method: 'POST',
        body: { otp }
      })
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useLogoutMutation, useRegisterMutation, useVerifyEmailMutation } = brokerAuthApi;