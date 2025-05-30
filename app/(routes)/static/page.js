// https://nextjs.org/docs/app/deep-dive/caching#fetch

import ProductList from "@/_app/components/productListt";

async function getProducts() {
  const res = await fetch("https://fakerapi.it/api/v2/products?_quantity=10", {
    // cache: "force-cache",
    next: {
      revalidate: 10, // Revalidate every 10 seconds
      //   tags: ['products']
    },
  });
  const data = await res.json();
  return data.data;
}

export default async function StaticPage() {
  const products = await getProducts();
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl text-gray-600 mb-4 text-center">
          Products (SSG - Static)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          This page is statically rendered at build time
        </p>
        <ProductList products={products} />
      </div>
    </div>
  );
}

// revalidateTag('products')
// revalidatePath('/')
