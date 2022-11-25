import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import formatImageUrl from "../utils/formatImageUrl";

const Search = () => {
  const { loading, searchData } = useSelector((state) => state.search);

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

  if (searchData.length) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {searchData.map(
          ({ id, attributes: { category, title, price, images } }) => {
            return (
              <ProductCard
                img_url={formatImageUrl(
                  "https://gadgets-world.up.railway.app",
                  images.data[0].attributes.url
                )}
                title={title}
                price={price}
                productId={id}
                categoryId={category}
                key={id}
              />
            );
          }
        )}
      </Box>
    );
  }

  return (
    <Typography sx={{ color: "dark.main", fontStyle: "italic" }}>
      No product found...
    </Typography>
  );
};

export default Search;
