import { createStore } from 'redux'
import TodosReducer from './TodosReducer'

const TodosStore = createStore(TodosReducer)

export default TodosStore
