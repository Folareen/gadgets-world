import { Box, CircularProgress, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import formatImageUrl from "../utils/formatImageUrl";

const Products = ({ baseUrl }) => {
  const { data, loading, error } = useFetch(
    `${baseUrl}/api/categories?populate[products][populate][0]=images`
  );

  if (loading) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
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
    return (
      <Typography sx={{ color: "danger.main" }}>Error Occurred...</Typography>
    );
  }

  return (
    <Box>
      {data.map(({ attributes }) => {
        return (
          <Box key={attributes.name}>
            <Typography
              sx={{
                fontSize: 20,
                mt: 2,
                textTransform: "capitalize",
                color: "dark.main",
                textAlign: { xs: "left", md: "center" },
                mx: { md: 2, xs: 1.5 },
              }}
            >
              {attributes.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                width: "100%",
                justifyContent: { md: "center" },
              }}
            >
              {attributes.products.data.map(
                ({ id, attributes: { title, price, images } }) => {
                  return (
                    <ProductCard
                      img_url={formatImageUrl(
                        baseUrl,
                        images.data[0].attributes.url
                      )}
                      title={title}
                      price={price}
                      productId={id}
                      categoryId={attributes.name}
                      key={id}
                    />
                  );
                }
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Products;

export const getServerSideProps = async () => {
  return {
    props: {
      baseUrl: process.env.BASE_URL,
    },
  };
};
