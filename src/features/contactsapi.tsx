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

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetcontactsQuery,useGetcontactQuery } = contactsapi