import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = () => {
  const { data } = useSelector((state) => state.user);
  const { replace } = useRouter();

  useEffect(() => {
    if (!data) {
      toast.error("Please login!");
      replace("/auth");
    }
  }, [data]);

  return <Typography>Coming soon...</Typography>;
};

export default Checkout;
