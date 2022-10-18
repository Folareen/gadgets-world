import { useRouter } from "next/router";

const Product = () => {
  const {
    query: { productId },
  } = useRouter();
  return <div>{productId}</div>;
};

export default Product;
