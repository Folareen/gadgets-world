import { Typography, Box, CircularProgress } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import formatImageUrl from "../../utils/formatImageUrl";

const Category = ({ productCategoryId, baseUrl }) => {
  const { data, loading, error } = useFetch(
    `${baseUrl}/api/categories?populate[products][populate][0]=images&filters[name][$eq]=${productCategoryId}`,
    productCategoryId
  );

  let products;

  if (data) products = data[0];

  if (loading) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    <Typography sx={{ color: "danger.main" }}>Error Occurred...</Typography>;
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.attributes.products.data.map(
          ({ id, attributes: { title, price, images } }) => {
            return (
              <ProductCard
                img_url={formatImageUrl(baseUrl, images.data[0].attributes.url)}
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
      baseUrl: process.env.BASE_URL,
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
