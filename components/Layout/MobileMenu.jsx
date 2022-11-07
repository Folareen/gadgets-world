import linkItems from "../../utils/linkItems";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

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

export default MobileMenu