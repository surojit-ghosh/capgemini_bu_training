import { useState } from "react";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    inStock: true,
    reviews: [
      { id: 101, user: "Alice", rating: 5, comment: "Excellent performance!" },
      { id: 102, user: "Bob", rating: 4, comment: "Great value for money." },
    ],
  },
  { id: 2, name: "Mobile", price: 20000, inStock: false, reviews: [] },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    inStock: true,
    reviews: [
      { id: 103, user: "Charlie", rating: 4, comment: "Comfortable and clear sound." },
    ],
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(INITIAL_PRODUCTS[0]);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({ name: "", price: "", inStock: true });
  const [errors, setErrors] = useState({});

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsEditing(false);
  };

  const handleStartEdit = () => {
    setFormData({
      name: selectedProduct.name,
      price: selectedProduct.price,
      inStock: selectedProduct.inStock,
    });
    setErrors({});
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = "Enter a valid price";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id === selectedProduct.id
        ? {
            ...p,
            name: formData.name.trim(),
            price: Number(formData.price),
            inStock: formData.inStock,
          }
        : p
    );

    setProducts(updatedProducts);
    setSelectedProduct(updatedProducts.find((p) => p.id === selectedProduct.id));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-xl font-bold mb-8">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {products.map((product) => {
            const isSelected = selectedProduct?.id === product.id;
            return (
              <div
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className={`p-4 bg-white rounded-lg border transition-all cursor-pointer ${
                  isSelected ? "border-slate-900 ring-1 ring-slate-900" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-slate-500 text-xs mt-1">₹{product.price.toLocaleString("en-IN")}</p>

                <div className="flex justify-between items-center mt-4 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                  <span className={product.inStock ? "text-emerald-600 font-medium" : "text-slate-400"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                  <span>
                    {product.reviews.length} {product.reviews.length === 1 ? "review" : "reviews"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-slate-200 bg-white rounded-lg">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-lg font-bold">{selectedProduct.name}</h2>
                <p className="text-xl font-semibold mt-1">₹{selectedProduct.price.toLocaleString("en-IN")}</p>
                <p className={`text-xs mt-2 font-medium ${selectedProduct.inStock ? "text-emerald-600" : "text-slate-400"}`}>
                  {selectedProduct.inStock ? "Available" : "Unavailable"}
                </p>
              </div>

              <button
                onClick={handleStartEdit}
                className="w-fit px-4 py-1.5 text-xs font-semibold text-slate-900 border border-slate-200 hover:border-slate-950 rounded bg-white hover:bg-slate-50 transition"
              >
                Edit Details
              </button>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Reviews</h3>
              
              {selectedProduct.reviews.length === 0 ? (
                <p className="text-xs text-slate-400 italic">No reviews yet.</p>
              ) : (
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {selectedProduct.reviews.map((review) => (
                    <div key={review.id} className="text-xs pb-2 border-b border-slate-50 last:border-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">{review.user}</span>
                        <span className="text-amber-500">{"★".repeat(review.rating)}</span>
                      </div>
                      <p className="text-slate-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {isEditing && (
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-xs border border-slate-200 shadow-md">
              <h3 className="text-sm font-bold mb-4">Edit Product</h3>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-1.5 border rounded text-xs focus:outline-none ${
                      errors.name ? "border-rose-500" : "border-slate-200 focus:border-slate-900"
                    }`}
                  />
                  {errors.name && <p className="text-rose-600 text-[10px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-1.5 border rounded text-xs focus:outline-none ${
                      errors.price ? "border-rose-500" : "border-slate-200 focus:border-slate-900"
                    }`}
                  />
                  {errors.price && <p className="text-rose-600 text-[10px] mt-1">{errors.price}</p>}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label htmlFor="inStock" className="text-xs text-slate-700 cursor-pointer">In Stock</label>
                  <input
                    type="checkbox"
                    id="inStock"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleInputChange}
                    className="rounded border-slate-300 text-slate-900 h-4 w-4 cursor-pointer"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="text-xs text-slate-400 hover:text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs text-white bg-slate-900 hover:bg-slate-800 rounded transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;