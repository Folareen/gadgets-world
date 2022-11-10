import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "light.light",
        minHeight: "100vh",
        pb: 6,
        position: "relative",
      }}
    >
      <Head>
        <title>Gadgets World</title>
        <meta
          name="description"
          content="Best ecommerce store to shop gadgets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ToastContainer />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
