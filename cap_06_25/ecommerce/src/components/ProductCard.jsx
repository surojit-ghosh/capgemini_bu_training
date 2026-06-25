import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice.js'
import { showToast } from './Toast.jsx'

const PRODUCTS = [
  { id: 1, name: 'Aloo Chop', price: 10, image: '/aloo-chop.webp' },
  { id: 2, name: 'Tomato Chop', price: 15, image: '/tomato-chop.jpeg' },
  { id: 3, name: 'Egg Chop', price: 20, image: '/egg-chop.jpeg' },
  { id: 4, name: 'Macher Chop', price: 25, image: '/macher-chop.jpeg' },
]

export { PRODUCTS }

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  function handleAdd() {
    dispatch(addItem({ id: product.id, name: product.name, price: product.price }))
    showToast(`${product.name} added to cart`)
  }

  return (
    <div className="rounded border border-neutral-200 bg-white p-4 transition hover:shadow-sm">
      <div className="mb-3 flex h-32 items-center justify-center overflow-hidden rounded bg-neutral-50">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <h3 className="mb-1 font-display text-sm font-semibold text-neutral-900">
        {product.name}
      </h3>
      <p className="mb-3 text-xs text-neutral-500">₹{product.price}</p>
      <button
        onClick={handleAdd}
        className="w-full cursor-pointer rounded bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-800"
      >
        Add to Cart
      </button>
    </div>
  )
}
