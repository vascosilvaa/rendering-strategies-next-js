import ProductCard from "./productCard";

const ProductList = ({ products, title }) => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl text-gray-600 mb-4 text-center">{title}</h1>
      <div className="space-y-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
