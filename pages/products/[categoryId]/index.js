import Link from "next/link";
import { useState, useEffect } from "react";

const Category = ({ categoryId }) => {
  const [categoryDetails, setCategoryDetails] = useState("");

  useEffect(() => {
    setCategoryDetails(`will fetch for ${categoryId}`);
  }, [categoryId]);

  return (
    <div>
      all products under {categoryDetails}
      {/* <Link href="/products/laptops/macbook">macbook</Link> */}
    </div>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      categoryId: params.categoryId,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { categoryId: "laptops" } },
      { params: { categoryId: "phones" } },
      { params: { categoryId: "accessories" } },
    ],
    fallback: false,
  };
};
