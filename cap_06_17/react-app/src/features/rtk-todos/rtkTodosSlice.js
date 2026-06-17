import { createSlice } from '@reduxjs/toolkit'

const rtkTodosSlice = createSlice({
  name: 'rtkTodos',
  initialState: {
    items: [
      { id: 1, text: 'Review PR', completed: false },
      { id: 2, text: 'Write unit tests', completed: true },
      { id: 3, text: 'Update API docs', completed: false },
      { id: 4, text: 'Fix login bug', completed: false },
    ],
    filter: 'all',
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.unshift({ id: Date.now(), text: action.payload, completed: false })
      },
      prepare(text) {
        if (!text.trim()) throw new Error('text required')
        return { payload: text.trim() }
      },
    },
    toggleTask(state, action) {
      const task = state.items.find((t) => t.id === action.payload)
      if (task) task.completed = !task.completed
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, setFilter } = rtkTodosSlice.actions
export default rtkTodosSlice.reducer
