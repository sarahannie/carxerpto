import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://autobuy-server.onrender.com/buyer',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth');
    if (token) {
      
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const buyerProductApi = createApi({
  reducerPath: 'buyerProductApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
   
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      })
    }),

    getCategoryProducts: builder.query({
      query: (Sedans) => ({
        url: `/products/category/Sedans`,
        method: 'GET'
      })
    }),
    getSuvCategoryProducts: builder.query({
      query: (SUVs) => ({
        url: `/products/category/SUVs`,
        method: 'GET'
      })
    }),
    getCoupesCategoryProducts: builder.query({
      query: (Coupes) => ({
        url: `/products/category/Coupes`,
        method: 'GET'
      })
    }),
    getHatchbacksCategoryProducts: builder.query({
      query: (Hatchbacks) => ({
        url: `/products/category/Hatchbacks`,
        method: 'GET'
      })
    }),
    getPickupTrucksCategoryProducts: builder.query({
      query: (PickupTruckss) => ({
        url: `/products/category/Pickup Trucks`,
        method: 'GET'
      })
    }),
    getBroker: builder.query({
      query: () => ({
        url: '/brokers',
        method: 'GET'
      })
    }),
    getMinivansCategoryProducts: builder.query({
      query: (Minivans) => ({
        url: `/products/category/Minivans`,
        method: 'GET'
      })
    }),
    editProfile: builder.mutation({
      query: (formData ) => ({
        url: '/edit-profile',
        method: 'PUT',
        body: formData 
      })
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET'
      })
    }),
    

  })
});

export const {  useGetProductsQuery, useGetCategoryProductsQuery, useGetSuvCategoryProductsQuery, useGetCoupesCategoryProductsQuery, useGetHatchbacksCategoryProductsQuery, useGetPickupTrucksCategoryProductsQuery, useGetMinivansCategoryProductsQuery, useGetBrokerQuery, useEditProfileMutation, useGetProfileQuery } = buyerProductApi;
