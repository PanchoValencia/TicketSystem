import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import ticketSystemReducer from './TicketSystemSlice'

const rootReducer = combineReducers({
  ticketSystem: ticketSystemReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ticketSystem'],
};

const persistedReducer = persistReducer(persistConfig, ticketSystemReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist requires it
    }),
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch