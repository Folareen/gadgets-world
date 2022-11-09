import { Box, Typography } from "@mui/material"
import Link from 'next/link'

const ProductCard = ({img_url, title, price, productId, categoryId}) => {
  return (
    <Link href={`/${categoryId}/${productId}`}>
        <Box sx={{width: { xs: '200px', sm: '250px', lg: '300px'}, m: 2, boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)', borderRadius: 2, '&:hover' :{
            cursor: 'pointer'} }}>
        
            <Box sx={{height: { xs: '150px', sm: '200px', lg: '250px'}, width: '100%', mb: 1}}>
                <img src={img_url} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </Box>
            
            <Typography sx={{fontSize: 18, color: 'primary.main', textTransform: 'capitalize'}}>
                {title}
            </Typography>

            <Typography sx={{color: 'dark.main', fontSize: 18}}>
                ${price}
            </Typography>

        </Box>
    </Link>

  )
}

export default ProductCard