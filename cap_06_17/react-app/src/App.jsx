import BookContainer from './BasicRedux/BookContainer'
import { Provider } from 'react-redux'
import Store from './BasicRedux/Store'

export default function App() {
  return (
    <Provider store={Store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <BookContainer />
      </div>
    </Provider>
  )
}
