"use client";

import ProductList from "@/app/components/productList";
import { useState, useEffect } from "react";

export default function ClientPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://fakerapi.it/api/v2/products?_quantity=10",
        );
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl text-gray-600 mb-4 text-center">
          Products (Client)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          This page fetches data on the client side
        </p>
        {loading ? (
          <div className="text-center text-gray-500">Loading products...</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
}
