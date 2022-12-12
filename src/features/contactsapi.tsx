import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact } from '../models/contact.model'


// Define a service using a base URL and expected endpoints
export const contactsapi  = createApi({
  reducerPath: 'contactsapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes:['Contact'],
  endpoints: (builder) => ({
    getcontacts: builder.query<Contact[],void>({
      query: () => `/posts`,
      providesTags: ['Contact'],
    }),
    getcontact: builder.query<Contact[],number>({
      query: (id) => `/posts/${id}`,
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