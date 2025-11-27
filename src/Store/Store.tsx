import { configureStore } from '@reduxjs/toolkit';
import ticketSystemReducer from './TicketSystemSlice';

export const store = configureStore({
  reducer: ticketSystemReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
