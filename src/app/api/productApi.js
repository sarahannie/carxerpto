import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://autobuy-server.onrender.com/seller',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (product) => ({
        url: '/add-product',
        method: 'POST',
        body: product
      })
    })
  })
});

export const { useAddProductMutation } = productApi;
