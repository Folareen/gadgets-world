import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { authenticated, authenticating } from "../../features/userSlice";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(authenticating());
      if (user) {
        dispatch(authenticated(user.providerData[0]));
      } else {
        dispatch(authenticated(null));
      }
    });
  }, [data]);

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
