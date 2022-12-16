import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsapi } from '../features/contactsapi';
import { filterReducer } from '../features/filterReducer';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsapi.reducerPath]: contactsapi.reducer,
    filters: filterReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsapi.middleware),
});
