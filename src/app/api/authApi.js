import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://autobuy-server.onrender.com/buyer';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      })
    }),
    register: builder.mutation({
      query: ({ email, password, firstName,lastName }) => ({
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

export const {  useLogoutMutation, useRegisterMutation, useVerifyEmailMutation } = authApi;
