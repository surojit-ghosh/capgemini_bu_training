const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mobile", price: 20000, inStock: false },
  { id: 3, name: "Headphones", price: 3000, inStock: true },
];

const ProductList = () => {
  return (
    <div className="">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList