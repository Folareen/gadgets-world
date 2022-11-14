import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { data } = useSelector((state) => state.user);
  const { replace } = useRouter();

  useEffect(() => {
    if (!data) {
      replace("/auth");
    }
  }, []);

  return <Typography>Coming soon...</Typography>;
};

export default Checkout;
