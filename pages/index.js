import { Box } from "@mui/material";
import BottomBanner from "../components/BottomBanner";
import TopBanner from "../components/TopBanner";
import TrendingProducts from "../components/TrendingProducts";

const Home = ({ trendingProducts, baseUrl }) => {
  return (
    <Box sx={{ pb: 2 }}>
      <TopBanner />
      <TrendingProducts trendingProducts={trendingProducts} baseUrl={baseUrl} />
      <BottomBanner />
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
      baseUrl: process.env.BASE_URL,
    },
  };
};
