import { Box } from "@mui/material";
import Banner from "../components/Banner";
import TrendingProducts from "../components/TrendingProducts";

const Home = ({ trendingProducts }) => {
  return (
    <Box sx={{ pb: 2 }}>
      <Banner />
      <TrendingProducts trendingProducts={trendingProducts} />
    </Box>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/categories?populate[products][populate][0]=images`
  );
  const data = await response.json();

  return {
    props: {
      trendingProducts: data.data,
    },
  };
};
