import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://autobuy-server.onrender.com/users';

export const signinAuthApi = createApi({
  reducerPath: 'signinAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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

export const { useLoginMutation, useLogoutMutation, useResendOtpMutation, useForgotPasswordMutation, useChangePasswordMutation  } = signinAuthApi;
