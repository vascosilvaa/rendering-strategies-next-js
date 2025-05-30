import ProductList from "@/components/productList";

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://fakerapi.it/api/v2/products?_quantity=10",
  );
  const data = await response.json();

  return {
    props: {
      products: data.data,
    },
  };
};

const SSRPage = ({ products }) => {
  return <ProductList products={products} title="Product List" />;
};

export default SSRPage;
