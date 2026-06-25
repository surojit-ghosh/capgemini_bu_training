import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectItemCount } from '../store/cartSlice.js'

export default function Navbar() {
  const count = useSelector(selectItemCount)

  return (
    <nav className="h-14 border-b border-neutral-200 bg-white px-6">
      <div className="mx-auto flex h-full max-w-[1160px] items-center justify-between">
        <Link to="/" className="font-display text-sm font-bold tracking-widest text-neutral-900">
          CHOPCART
        </Link>
        <Link to="/cart" className="relative text-neutral-600 hover:text-neutral-900 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[9px] font-semibold text-white leading-none">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
