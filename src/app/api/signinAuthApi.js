import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://autobuy-server.onrender.com/users',
  // baseUrl: 'http://localhost:3576/users/',

  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth');
    console.log(`ReqToken:`, token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const signinAuthApi = createApi({
  reducerPath: 'signinAuthApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password }
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      })
    }),
    resendOtp: builder.mutation({
      query: ({ email }) => ({
        url: '/resendotp',
        method: 'POST',
        body: { email }
      })
    }),
    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: '/forgotpassword',
        method: 'POST',
        body: { email }
      })
    }),
    changePassword: builder.mutation({
      query: ({ otp, password, confirmPassword }) => ({
        url: '/changepassword',
        method: 'POST',
        body: { otp, password, confirmPassword }
      })
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useResendOtpMutation,
  useForgotPasswordMutation,
  useChangePasswordMutation
} = signinAuthApi;
