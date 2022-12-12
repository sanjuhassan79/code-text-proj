import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { launches } from '../models/launches.model'


// Define a service using a base URL and expected endpoints
export const contactsapi  = createApi({
  reducerPath: 'contactsapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/launches' }),
  tagTypes:['Contact'],
  endpoints: (builder) => ({
    getcontacts: builder.query<launches[],void>({
      query: () => `/`,
      providesTags: ['Contact'],
    }),
    getcontact: builder.query<launches[],number>({
      query: (flight_number) => `/${flight_number}`,
      providesTags: ['Contact'],
    }),
//     addContact:builder.mutation<void, Contact>({
// query:contact=>({
//   url:`/posts`,
//   method:'POST',
//   body:contact
// }),
// invalidatesTags: ['Contact'],

//     }),
//     updateContact:builder.mutation<void, Contact>({
// query:(id,...rest)=>({
//   url:`/posts/${id}`,
//   method:'PUT',
//   body:rest
// })
// ,
// invalidatesTags: ['Contact'],
//     }),
//     deleteContact:builder.mutation<void, number>({
// query:(id)=>({
//   url:`/posts/${id}`,
//   method:'DELETE',

// })
// ,
// invalidatesTags: ['Contact'],
//     }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetcontactsQuery,useGetcontactQuery } = contactsapi