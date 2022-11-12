import { useState, useEffect } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import ProductCard from "../../components/ProductCard";

const Category = ({ productCategoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:1337/api/categories?populate[products][populate][0]=images&filters[name][$eq]=${productCategoryId}`
      );
      const data = await response.json();
      setProducts(data.data[0]);
      setLoading(false);
    })();
  }, [productCategoryId]);

  if (loading) {
    return (
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          minHeight: "100vh",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Typography
        sx={{
          fontSize: 20,
          mt: 2,
          textTransform: "capitalize",
          color: "dark.main",
          textAlign: "center",
        }}
      >
        {products.attributes.name}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.attributes.products.data.map(
          ({ id, attributes: { title, price, images } }) => {
            return (
              <ProductCard
                img_url={`http://localhost:1337${images.data[0].attributes.url}`}
                title={title}
                price={price}
                productId={id}
                categoryId={products.attributes.name}
                key={id}
              />
            );
          }
        )}
      </Box>
    </>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      productCategoryId: params.productCategoryId,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { productCategoryId: "laptops" } },
      { params: { productCategoryId: "phones" } },
      { params: { productCategoryId: "accessories" } },
    ],
    fallback: false,
  };
};
