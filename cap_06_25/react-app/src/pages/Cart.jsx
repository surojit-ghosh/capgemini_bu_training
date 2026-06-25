import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectTotal } from '../store/cartSlice.js'
import CartItem from '../components/CartItem.jsx'

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  const total = useSelector(selectTotal)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="mb-4 text-sm text-neutral-400">Cart is empty</p>
        <Link
          to="/"
          className="rounded bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-800"
        >
          Add some chops
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-6 font-display text-xl font-bold text-neutral-900">Cart</h1>
      <div className="rounded border border-neutral-200 bg-white">
        <div className="border-b border-neutral-200 px-4 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3">
          <p className="text-sm font-semibold text-neutral-900">Total</p>
          <p className="text-sm font-bold text-neutral-900">₹{total}</p>
        </div>
      </div>
      <Link
        to="/"
        className="mt-4 inline-block rounded bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition hover:bg-neutral-200"
      >
        ← Continue Shopping
      </Link>
    </div>
  )
}
