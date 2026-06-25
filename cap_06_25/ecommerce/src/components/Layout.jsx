import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Toast from './Toast.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main className="mx-auto max-w-[1160px] px-6 py-8">
        <Outlet />
      </main>
      <Toast />
    </div>
  )
}
