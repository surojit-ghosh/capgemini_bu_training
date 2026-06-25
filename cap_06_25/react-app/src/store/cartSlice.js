import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    updateQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectTotal = state =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

export const selectItemCount = state =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0)

export default cartSlice.reducer
