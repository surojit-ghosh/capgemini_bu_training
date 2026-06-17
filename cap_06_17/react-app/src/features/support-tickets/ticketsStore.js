import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice'

const ticketsStore = configureStore({
  reducer: { tickets: ticketsReducer },
})

export default ticketsStore
