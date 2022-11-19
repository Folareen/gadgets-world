import { Box, Typography, Paper } from "@mui/material"
import Link from 'next/link'
import formatPrice from "../utils/formatPrice"
import {useState} from 'react'

const ProductCard = ({img_url, title, price, productId, categoryId}) => {
    const [hover, setHover] = useState(false)
    const boxHoverStyle = hover ? 
    {
        cursor: 'pointer',
        boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.1)',
        transform : 'scale(1.02)' 
    }
    : 
    {}

    const imageHoverStyle = hover ? 
    {
        p: 0.5
    }
    :
    {}

  return (
    <Link href={`/${categoryId}/${productId}`}>
        <Box sx={{width: { xs: '200px', sm: '250px', lg: '300px'}, m: 2, boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)', borderRadius: 4, bgcolor: 'light.main', transition: 'all 1s ease', ...boxHoverStyle}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
        
            <Box sx={{height: { xs: '150px', sm: '200px', lg: '250px'}, width: '100%', mb: 1.5, borderRadius: 4, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, p: 2,  borderBottom: '1px solid rgba(0, 0, 0, 0.3)', transition: 'all 1s ease', ...imageHoverStyle }}>
                <img src={img_url} style={{width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 'inherit', borderTopLeftRadius: 'inherit'}} />
            </Box>
            
            <Typography sx={{fontSize: 18, color: 'primary.main', textTransform: 'capitalize', textAlign: 'center'}}>
                {title}
            </Typography>

            <Typography sx={{color: 'dark.main', fontSize: 16, my: 0.5, textAlign: 'center'}}>
                ${formatPrice(price)}
            </Typography>

        </Box>
    </Link>

  )
}

export default ProductCard