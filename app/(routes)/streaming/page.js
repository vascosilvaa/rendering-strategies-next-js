import ProductList from "@/app/components/productList";
import { Suspense } from "react";
import ClientPage from "../client/page";

async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 0)); // Simulate slow data fetch
  const res = await fetch("https://fakerapi.it/api/v2/products?_quantity=5", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.data;
}

async function ProductsContent() {
  const products = await getProducts();

  return <ProductList products={products} />;
}

export default function StreamingPage() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl text-gray-600 mb-4 text-center">
          Products (Streaming)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          This page demonstrates both server and client-side data fetching
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Server-side Streaming
            </h2>
            <Suspense
              fallback={
                <div className="text-center text-gray-500">
                  Loading server data...
                </div>
              }
            >
              <ProductsContent />
            </Suspense>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Client-side Fetching</h2>
            <ClientPage />
          </div>
        </div>
      </div>
    </div>
  );
}
