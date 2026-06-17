import { Provider } from 'react-redux'
import ticketsStore from './features/support-tickets/ticketsStore'
import SupportTickets from './features/support-tickets/SupportTickets'

export default function App() {
  return (
    <Provider store={ticketsStore}>
      <div className="min-h-screen font-sans px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <SupportTickets />
        </div>
      </div>
    </Provider>
  )
}
