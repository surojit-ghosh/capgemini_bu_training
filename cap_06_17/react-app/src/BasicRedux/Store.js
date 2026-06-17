import { createStore } from 'redux'
import BookReducer from './BookReducer'

const Store = createStore(BookReducer)

export default Store
