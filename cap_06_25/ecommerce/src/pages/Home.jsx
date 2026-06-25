import ProductCard, { PRODUCTS } from '../components/ProductCard.jsx'

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 font-display text-xl font-bold text-neutral-900">Our Chops</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {PRODUCTS.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
