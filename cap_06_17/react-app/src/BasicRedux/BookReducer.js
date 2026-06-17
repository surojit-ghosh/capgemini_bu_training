const initialState = {
  bookName: 'React Native',
  numOfBooks: 100,
}

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_BOOK':
      return {
        ...state,
        numOfBooks: state.numOfBooks - action.payload
      }
    case 'UPDATE_BOOK_NAME':
      return {
        ...state,
        bookName: action.payload
      }
    default:
      return state
  }
}

export default BookReducer
