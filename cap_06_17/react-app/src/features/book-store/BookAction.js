export const purchase_book = () => ({
  type: 'BUY_BOOK',
  payload: 10
})

export const update_book_name = (name) => ({
  type: 'UPDATE_BOOK_NAME',
  payload: name
})
