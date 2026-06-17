import { useSelector, useDispatch } from 'react-redux'
import { purchase_book, update_book_name } from './BookAction'

export default function BookContainer() {
  const numOfBooks = useSelector(state => state.book.numOfBooks)
  const bookName = useSelector(state => state.book.bookName)
  const d = useDispatch()

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Book Container : {bookName}</h1>
      <h2 className="text-lg text-gray-600 mb-6">Number of Books : {numOfBooks}</h2>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => d(purchase_book())}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 cursor-pointer"
        >
          Buy Book
        </button>
        <button
          onClick={() => d(update_book_name('Angular'))}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 cursor-pointer"
        >
          Update Heading
        </button>
      </div>
    </div>
  )
}
