import { useState, useEffect } from "react";
import Loading from "@/components/loading";
import ProductList from "@/components/productList";

const CSRPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakerapi.it/api/v2/products?_quantity=10",
        );
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return <ProductList products={products} title="Product List" />;
};

export default CSRPage;
