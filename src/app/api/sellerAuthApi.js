import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for seller API
const SELLER_API_BASE_URL = 'https://autobuy-server.onrender.com/seller';

export const sellerAuthApi = createApi({
  reducerPath: 'sellerAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: SELLER_API_BASE_URL }),
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
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useLogoutMutation, useRegisterMutation } = sellerAuthApi;
