import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTickets: [
    { id: 'T101', customerName: 'Riya Sharma', issueTitle: 'Unable to reset password', description: 'Customer is not receiving password reset email.', status: 'Open', priority: 'High', assignedTo: 'Aman', starred: false },
    { id: 'T102', customerName: 'Karan Mehta', issueTitle: 'Subscription payment failed', description: 'Payment gets declined even though card is valid.', status: 'In Progress', priority: 'Medium', assignedTo: 'Sneha', starred: true },
    { id: 'T103', customerName: 'Neha Iyer', issueTitle: 'App crashes on login', description: 'Application closes immediately after entering credentials.', status: 'Open', priority: 'High', assignedTo: 'Rahul', starred: false },
    { id: 'T104', customerName: 'Arjun Rao', issueTitle: 'Unable to download invoice', description: 'Invoice download button is not responding.', status: 'Resolved', priority: 'Low', assignedTo: 'Megha', starred: false },
    { id: 'T105', customerName: 'Pooja Nair', issueTitle: 'Profile update not saving', description: 'Customer profile changes disappear after refresh.', status: 'In Progress', priority: 'Medium', assignedTo: 'Aman', starred: true },
  ],
  selectedTicketId: null,
  activeFilter: 'All',
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    selectTicket(state, action) {
      state.selectedTicketId = action.payload
    },
    updateStatus(state, action) {
      const { id, status } = action.payload
      const ticket = state.allTickets.find((t) => t.id === id)
      if (ticket) ticket.status = status
    },
    updatePriority(state, action) {
      const { id, priority } = action.payload
      const ticket = state.allTickets.find((t) => t.id === id)
      if (ticket) ticket.priority = priority
    },
    toggleStar(state, action) {
      const ticket = state.allTickets.find((t) => t.id === action.payload)
      if (ticket) ticket.starred = !ticket.starred
    },
    setFilter(state, action) {
      state.activeFilter = action.payload
    },
  },
})

export const { selectTicket, updateStatus, updatePriority, toggleStar, setFilter } = ticketsSlice.actions
export default ticketsSlice.reducer
