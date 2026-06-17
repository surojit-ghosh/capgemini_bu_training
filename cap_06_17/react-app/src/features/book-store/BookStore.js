import { createStore } from 'redux'
import BookReducer from './BookReducer'

const BookStore = createStore(BookReducer)

export default BookStore
