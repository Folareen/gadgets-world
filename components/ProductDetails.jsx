import { Box, Typography } from "@mui/material"
import AddToCart from "./AddToCart"

const ProductDetails = ({productDetails: {title, description, price}}) => {
  return (
    <Box sx={{flex: 1, p: 2}}>

        <Typography sx={{color: 'primary.main', fontSize: 24, mb: 4, textTransform: 'capitalize', fontWeight: 'bold'}}>
            {title}
        </Typography >

        <Typography sx={{color: 'dark.main', fontSize: 18, mb: 4}}>
            {description}
        </Typography>

        <Typography sx={{color: 'primary.main', fontSize: 24, mb: 4,}}>
            ${price}
        </Typography>

        <AddToCart />
    </Box>
  )
}

export default ProductDetails