const initialState = {
  items: [
    { id: 1, text: 'Review PR', completed: false },
    { id: 2, text: 'Write unit tests', completed: true },
    { id: 3, text: 'Update API docs', completed: false },
    { id: 4, text: 'Fix login bug', completed: false },
  ],
  filter: 'all',
}

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        items: [
          { id: Date.now(), text: action.payload, completed: false },
          ...state.items,
        ],
      }
    case 'TOGGLE_TASK':
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export default TodosReducer
