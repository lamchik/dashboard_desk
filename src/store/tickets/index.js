import { createAction, createReducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllTickets } from '../../api'


const initialState = {
  groups: {
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"]
  },
  allTickets: [],
  ticketsById: {}
}

const getAllTicketsThunk = createAsyncThunk(
  'tickets/getAll',
  async (filters) => {
    return await getAllTickets(filters)
  }
)

const updateTicketsPositions = createAction('updateTickets')
const createTicket = createAction('createTicket')
const getAllTicketsAction = createAction('getAllTickets')
const getTicketById = createAction('getTicketById')
const updateTicket = createAction('updateTicket')
const deleteTicket = createAction('deleteTicket')
const addCommentToTicket = createAction('addCommentToTicket')

export const ticketsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllTicketsThunk.fulfilled,  (state, action) => {
      state.allTickets = action.payload
    })
    // .addCase(updateTicketsPositions, (state, action) => {
    //   state.groups.group1.push("10")
    // })
    // .addCase(createTicket, (state, action) => {
    //   state.byId[action.id] = action
    // })
})

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllTicketsThunk.fulfilled,  (state, action) => {
      state.allTickets = action.payload
    })
  },
})
