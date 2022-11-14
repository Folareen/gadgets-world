import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Account = () => {
  const { data } = useSelector((state) => state.user);
  const { replace } = useRouter();

  useEffect(() => {
    if (!data) {
      replace("/auth");
    }
  }, []);

  return <Typography>Coming soon...</Typography>;
};

export default Account;
