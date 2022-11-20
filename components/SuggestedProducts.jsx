import { Box, Typography, CircularProgress } from "@mui/material"
import useFetch from "../hooks/useFetch"
import formatImageUrl from "../utils/formatImageUrl";
import ProductCard from "./ProductCard";

const SuggestedProducts = ({productCategoryId, productId, baseUrl}) => {
  const { data, loading, error } = useFetch(
    `${baseUrl}/api/categories?populate[products][populate][0]=images&filters[name][$eq]=${productCategoryId}`,
    productCategoryId
  );

  let products;
    if (data) {
        products = data[0].attributes.products.data.filter(
            ({id}) => {
                return id != productId
            }
        )
    }

    if (loading) {
        return (
            <Box
            sx={{
                width: "100%",
                minHeight: "30vh",
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
      {
        products &&
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {products.map(
            ({ id, attributes: { title, price, images } }) => {
                console.log(title, id)
                return (
                <ProductCard
                    img_url={formatImageUrl(baseUrl, images.data[0].attributes.url)}
                    title={title}
                    price={price}
                    productId={id}
                    categoryId={productCategoryId}
                    key={id}
                />
                );
            }
            )}
        </Box>
      }
      </>
  )
}

export default SuggestedProducts