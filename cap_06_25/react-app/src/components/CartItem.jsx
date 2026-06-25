import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../store/cartSlice.js'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  function handleQtyChange(delta) {
    const next = item.quantity + delta
    if (next <= 0) {
      dispatch(removeItem(item.id))
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: next }))
    }
  }

  return (
    <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
      <div className="flex-1">
        <p className="text-sm font-medium text-neutral-900">{item.name}</p>
        <p className="text-xs text-neutral-400">₹{item.price} each</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded border border-neutral-200">
          <button
            onClick={() => handleQtyChange(-1)}
            className="cursor-pointer px-2 py-1 text-xs text-neutral-600 hover:text-neutral-900 transition"
          >
            −
          </button>
          <span className="min-w-[24px] text-center text-xs font-medium text-neutral-900">{item.quantity}</span>
          <button
            onClick={() => handleQtyChange(1)}
            className="cursor-pointer px-2 py-1 text-xs text-neutral-600 hover:text-neutral-900 transition"
          >
            +
          </button>
        </div>
        <p className="w-16 text-right text-sm font-semibold text-neutral-900">
          ₹{item.price * item.quantity}
        </p>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="cursor-pointer text-xs text-neutral-400 hover:text-red-600 transition"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
