import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const linkItems = ["laptops", "phones", "accessories"];

const isActive = (title, path) => {
  return path.startsWith(`/products/${title}`);
};

const MobileMenu = ({ showMobileMenu }) => (
  <Box
    sx={{
      height: "100vh",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: { xs: "flex", lg: "none" },
      flexDirection: "column",
      justifyContent: "space-between",
      bgcolor: "light.main",
      border: 1,
      color: "primary.main",
      textAlign: "center",
      py: 4,
    }}
  >
    <IconButton
      onClick={() => setShowMobileMenu((prev) => !prev)}
      sx={{ position: "absolute", top: 1, right: 1 }}
    >
      {!showMobileMenu && <CloseIcon />}
    </IconButton>

    <Link href="/">
      <Typography component="h1" sx={{ "&:hover": { cursor: "pointer" }}}>
        Meedah Store
      </Typography>
    </Link>
    <Box>
      {linkItems.map((item) => (
        <Link href={`/products/${item}`} key={item}>
          <Typography sx={{ p: 2, "&:hover": { cursor: "pointer" } }}>
            {item}
          </Typography>
        </Link>
      ))}
    </Box>
  </Box>
);

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname } = useRouter();
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "dark.main",
        color: "light.main",
        p: 2,
        boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.3)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {showMobileMenu && <MobileMenu />}

      <IconButton
        onClick={() => setShowMobileMenu((prev) => !prev)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        {!showMobileMenu ? <MenuIcon /> : <CloseIcon />}
      </IconButton>

      <Link href="/">
        <Typography
          component="h1"
          sx={{ "&:hover": { cursor: "pointer" }, color: "secondary.main" }}
        >
          Meedah Store
        </Typography>
      </Link>

      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        {linkItems.map((item) => (
          <Link href={`/products/${item}`} key={item}>
            <Typography
              sx={{
                color: isActive(item, pathname)
                  ? "secondary.main"
                  : "light.main",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {item}
            </Typography>
          </Link>
        ))}
      </Box>

      <Box>hi</Box>
    </Box>
  );
};

export default Header;
