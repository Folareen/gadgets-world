import { useRouter } from "next/router";
import { Box, CircularProgress, Typography } from "@mui/material";
import ProductGallery from "../../components/ProductGallery";
import ProductDetails from "../../components/ProductDetails";
import SuggestedProducts from "../../components/SuggestedProducts";
import useFetch from "../../hooks/useFetch";

const Product = ({ baseUrl }) => {
  const {
    query: { productId, productCategoryId },
  } = useRouter();

  const { data, loading, error } = useFetch(
    `${baseUrl}/api/products/${productId}?populate=*`,
    productId
  );

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

  if (error) return <Typography>Error occurred</Typography>;

  return (
    <>
      {data && (
        <>
          <Box
            sx={{
              display: "flex",
              p: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <ProductGallery images={data.attributes.images.data} />
            <ProductDetails
              productDetails={data.attributes}
              image={data.attributes.images.data[0].attributes.url}
              productId={productId}
            />
          </Box>

          <Typography
            sx={{
              my: 1,
              fontSize: 24,
              color: "dark.main",
              textAlign: "center",
            }}
          >
            You may like
          </Typography>
          <SuggestedProducts
            productCategoryId={productCategoryId}
            productId={productId}
          />
        </>
      )}
    </>
  );
};

export default Product;

export const getServerSideProps = async () => {
  return {
    props: {
      baseUrl: process.env.BASE_URL,
    },
  };
};
