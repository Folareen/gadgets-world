import { Box, Typography } from "@mui/material"
import Order from "./Order"

const ProductDetails = ({productDetails: {title, description, price}, image, productId}) => {
  return (
    <Box sx={{flex: 1, p: 2}}>

        <Typography sx={{color: 'primary.main', fontSize: 24, mb: {sm: 4, xs: 2}, textTransform: 'capitalize', fontWeight: 'bold'}}>
            {title}
        </Typography >

        <Typography sx={{color: 'dark.main', fontSize: {md: 18, xs: 16}, mb: {sm: 4, xs: 2}}}>
            {description}
        </Typography>

        <Typography sx={{color: 'primary.main', fontSize: 24, mb: {sm: 4, xs: 2}}}>
            ${price}
        </Typography>

        <Order title={title} price={price} image={image} productId={productId} showBuyNow={true} />
    </Box>
  )
}

export default ProductDetails