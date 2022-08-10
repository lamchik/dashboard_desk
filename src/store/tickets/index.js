import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAllTickets, createTicket,  updateTicket, getTicketById, deleteTicket, addComment} from '../../api'

const initialState = {
  groups: {
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"]
  },
  allTickets: [],
  ticketsById: {}
}

export const getAllTicketsThunk = createAsyncThunk(
  'tickets/getAll',
  async (filters) => {
    return await getAllTickets(filters)
  }
)

export const createTicketThunk = createAsyncThunk(
  'tickets/create',
  async (ticket) => {
    return await createTicket(ticket)
  }
)

export const updateTicketThunk = createAsyncThunk(
  'ticket/update',
  async ({id, ticket},) => {
    return await updateTicket(id, ticket)
  }
)

export const getTicketByIdThunk = createAsyncThunk(
  'ticket/getById',
  async (id,) => {
    return getTicketById(id);
  }
)

export const deleteTicketThunk = createAsyncThunk(
  'ticket/delete',
  async (id) => {
    return deleteTicket(id);
  }
)

export const addCommentThunk = createAsyncThunk(
  'ticket/addComment',
  async ({ticketId, comment}) => {
    return addComment(ticketId, comment);
  }
)

export const getAllTicketsSelector = state => state.reducer.allTickets
export const getTicketByIdSelector = (id) => state => state.reducer.ticketsById[id]

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getAllTicketsThunk.fulfilled, (state, action) => {
        state.allTickets = action.payload
      })
      .addCase(createTicketThunk.fulfilled, (state, action) => {
        state.ticketsById[action.payload.id] = action.payload
        state.allTickets.push(action.payload)
      })
      .addCase(updateTicketThunk.fulfilled, (state, action) => {
        state.ticketsById[action.payload.id] = action.payload
        state.allTickets = state.allTickets.filter(ticket => ticket.id !== action.payload.id).concat([action.payload])
      })
      .addCase(getTicketByIdThunk.fulfilled, (state, action) => {
        state.ticketsById[action.payload.id] = action.payload
      })
      .addCase(addCommentThunk.fulfilled, (state, action) => {
        state.ticketsById[action.payload.id] = action.payload
      })
  },
})
