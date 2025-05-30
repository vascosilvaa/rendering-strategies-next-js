import ProductList from "@/components/productList";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://fakerapi.it/api/v2/products?_quantity=10",
  );
  const data = await response.json();

  return {
    props: {
      products: data.data,
    },
    // Regenerate page every 10 seconds
    revalidate: 10,
  };
};

const SSRPage = ({ products }) => {
  const revalidate = () => {
    fetch("/api/revalidate-products");
  };

  return (
    <>
      <Link href="/csr">Go to CSR</Link>

      <ProductList
        products={products}
        title="Product List (Updates Every Minute)"
      />
    </>
  );
};

export default SSRPage;
