import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Ticket } from '../App.types';

export interface TicketSystemState {
  tickets: Array<Ticket>;
  searchQuery: string;
}

const initialState: TicketSystemState = {
  tickets: [],
  searchQuery: '',
};

export const ticketSystemSlice = createSlice({
  name: 'ticketSystem',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.push(action.payload);
    },
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const index = state.tickets.findIndex((ticket) => ticket.id === action.payload.id);
      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    },
    deleteTicket: (state, action: PayloadAction<string>) => {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTicket, updateTicket, deleteTicket, setSearchQuery } = ticketSystemSlice.actions;

export default ticketSystemSlice.reducer;
