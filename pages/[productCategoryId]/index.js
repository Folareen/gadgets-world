import { Typography, Box, CircularProgress } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

const Category = ({ productCategoryId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/categories?populate[products][populate][0]=images&filters[name][$eq]=${productCategoryId}`,
    productCategoryId
  );

  let products;

  if (data) products = data[0];

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

  if (error)
    <Typography sx={{ color: "danger.main" }}>Error Occurred...</Typography>;

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
