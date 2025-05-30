const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-1">
        <span className="bg-gray-50 px-2 py-0.5 rounded text-gray-600 text-sm">
          {product.category}
        </span>
        <span className="text-emerald-500 text-sm">${product.price}</span>
      </div>
      <h2 className="text-lg text-gray-700">{product.name}</h2>
      <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-gray-400">Tax: ${product.taxes}</span>
        <span className="text-xs text-gray-400">Stock: {product.stock}</span>
      </div>
    </div>
  );
};

export default ProductCard;
