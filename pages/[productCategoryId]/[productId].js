import { useRouter } from "next/router";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import ProductGallery from "../../components/ProductGallery";
import ProductDetails from "../../components/ProductDetails";
import SuggestedProducts from "../../components/SuggestedProducts";
import useFetch from "../../hooks/useFetch";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Product = ({ baseUrl }) => {
  const {
    query: { productId, productCategoryId },
    back,
  } = useRouter();

  const { data, loading, error } = useFetch(
    `${baseUrl}/api/products/${productId}?populate=*`,
    productId
  );

  if (loading) {
    return (
      <>
        <IconButton onClick={() => back()} sx={{ mr: 2 }}>
          <ArrowBackRoundedIcon sx={{ color: "dark.main" }} />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error)
    return (
      <>
        <IconButton onClick={() => back()} sx={{ ml: 2 }}>
          <ArrowBackRoundedIcon sx={{ color: "dark.main" }} />
        </IconButton>
        <Typography sx={{ color: "danger.main" }}>Error occurred</Typography>
      </>
    );

  return (
    <>
      {data && (
        <>
          <IconButton onClick={() => back()} sx={{ ml: 2 }}>
            <ArrowBackRoundedIcon sx={{ color: "dark.main" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              p: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <ProductGallery
              images={data.attributes.images.data}
              baseUrl={baseUrl}
            />
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
            baseUrl={baseUrl}
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
