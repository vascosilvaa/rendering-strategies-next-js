import ProductList from "@/_app/components/productListt";

export const dynamic = "force-dynamic";

async function getProducts() {
  const res = await fetch("https://fakerapi.it/api/v2/products?_quantity=10", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}

export default async function DynamicPage() {
  const products = await getProducts();

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl text-gray-600 mb-4 text-center">
          Products (SSR - Dynamic)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          This page is dynamically rendered on every request
        </p>
        <ProductList products={products} />
      </div>
    </div>
  );
}
