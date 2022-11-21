import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import shopping from "../assets/shopping.jpg";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

const NormalText = ({title}) => (
    <Typography sx={{fontSize: {xs: 20, md: 24}, color: 'dark.main', textTransform: 'uppercase'}}>
        {title}
    </Typography>
)

const HighlightedText = ({title}) => (
    <Typography sx={{fontSize: {xs: 20, md: 24}, color: 'primary.main', backgroundColor: 'light.light', borderRadius: 1, width: 'max-content', mx: 'auto', py: 0.5, px: 1, textTransform: 'uppercase'}} >
        {title}
    </Typography>
)

const BottomBanner = () => {
    const {push} = useRouter()
  return (
    <Paper
      sx={{
        mt: 5,
        borderRadius: 3,
        width: '90%',
        mx: 'auto',
        maxWidth: '1000px',
        height: '45vh',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'light.main', boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}
      elevation={5}
    >

      <Box sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'space-between', p: 2, textAlign: 'center', zIndex: 2}}>

        <NormalText title="Best web shop to buy" />
        <HighlightedText title="quality gadgets" />
        <NormalText title="at" />
        <HighlightedText title="affordable prices" />
        <NormalText title="and get them delivered to your doorstep" />

        <Button variant='contained' onClick={() => push('/products')} sx={{width: 'max-content', px: 4, py: 1, mx: 'auto', mt: 2, display: 'flex', alignItems: 'center'}}>
            Start Shopping <ShoppingCartCheckoutRoundedIcon fontSize="small" sx={{ml: 1}} />
        </Button>

      </Box>

      <Box sx={{ width: '100%', height: '100%', textAlign: 'center', position: 'absolute', zIndex: 1, opacity: 0.3, borderRadius: 3}}>

        <img src={shopping.src} style={{objectFit: 'cover', height: '100%', p: 0, zIndex: 2, position: 'relative', width: '100%', borderRadius: 'inherit'}} />

      </Box>

    </Paper>
  )
}

export default BottomBanner