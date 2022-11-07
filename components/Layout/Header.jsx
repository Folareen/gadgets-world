import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "@fontsource/kanit";

const linkItems = ["laptops", "phones", "accessories"];

const isActive = (title, path) => {
  return path === title
};

const MobileMenu = () => (
  <Box
    sx={{
      height: "100vh",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: { xs: "flex", sm: "none" },
      flexDirection: "column",
      justifyContent: "space-between",
      bgcolor: "light.main",
      color: "primary.main",
      textAlign: "center",
      py: 4,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2
    }}
  >
    <Box>
      {linkItems.map((item) => (
        <Link href={`/${item}`} key={item}>
          <Typography sx={{ p: 2, "&:hover": { cursor: "pointer" }, textTransform: 'capitalize' }}>
            {item}
          </Typography>
        </Link>
      ))}
    </Box>
  </Box>
);


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {push, query: {productCategoryId}} = useRouter();

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
        alignItems: 'center'
      }}
    >
      
      {showMobileMenu && <MobileMenu />}

      <IconButton
        onClick={() => setShowMobileMenu((prev) => !prev)}
        sx={{color: 'secondary.main',  display: { xs: "block", sm: "none" }, zIndex: 2}}
      >
        {!showMobileMenu ? <MenuIcon /> : <CloseIcon />}
      </IconButton>

      <Link href="/">
        <Typography
          component="h1"
          sx={{ "&:hover": { cursor: "pointer" }, color: "secondary.main", fontSize: {xs: 18, sm: 20}, fontWeight: 'bold',letterSpacing: 1.3,  height: 'max-content', fontFamily: 'kanit' }}
        >
          Gadgets World
        </Typography>
      </Link>

      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        {linkItems.map((item) => (
          <Link href={`/${item}`} key={item}>
            <Typography
              sx={{
                color: isActive(item, productCategoryId)
                  ? "light.main"
                  : "secondary.main",
                "&:hover": {
                  cursor: "pointer",
                  color: 'light.main'
                },
                px : 1, mx: 1, textTransform: 'capitalize'
              }}
            >
              {item}
            </Typography>
          </Link>
        ))}
      </Box>

      <Box >
        <IconButton onClick={() => {push('/cart')}} sx={{color: 'secondary.main'}}>
          <ShoppingCartRoundedIcon />
        </IconButton>
        <IconButton sx={{color: 'secondary.main', ml: 0.5}}>
          <AccountCircleRoundedIcon/>
        </IconButton>
      </Box>
      
    </Box>
  );
};

export default Header;
