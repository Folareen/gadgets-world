import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "max-content", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: 20,
            color: "dark.main",
            my: 2,
          }}
        >
          404...Page not found.
        </Typography>
        <Link href="/">
          <Button
            sx={{
              my: 2,
              px: 4,
            }}
            variant={"contained"}
          >
            <Typography>Go Home</Typography>
            <HomeRoundedIcon fontSize="small" sx={{ ml: 1 }} />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
