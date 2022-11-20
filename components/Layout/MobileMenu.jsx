import linkItems from "../../utils/linkItems";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";

const MobileMenu = ({setShowMobileMenu, showMobileMenu}) => (
  <Box sx={{
      transition: 'all 1s ease',      
      height: "100vh",
      width: '100%',
      zIndex: 2,
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      left: (showMobileMenu ? 0 : '-100%'),
      display: { xs: "flex", sm: "none" },
      flexDirection: "column",
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }} >
  <Paper
    sx={{
      height: '100%',
      bgcolor: "light.main",
      color: "primary.main",
      textAlign: "center",
      py: 4,
      width: '75%'
    }}
    elevation={5}
  >
    <Box sx={{mt: 2}}>
      {linkItems.map((item) => (
        <Link href={`/${item}`} key={item} >
          <Typography sx={{ p: 1, "&:hover": { cursor: "pointer" }, textTransform: 'capitalize', fontSize: 18, my: 0.5 }} onClick={() => setShowMobileMenu(false)}>
            {item === 'about-us' ? 'about us': item}
          </Typography>
        </Link>
      ))}
    </Box>
  </Paper>
  </Box>
);

export default MobileMenu