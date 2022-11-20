import { Box, Typography } from "@mui/material"
import Link from 'next/link'
import formatPrice from "../utils/formatPrice"
import {useState} from 'react'

const ProductCard = ({img_url, title, price, productId, categoryId}) => {
    const [hover, setHover] = useState(false)
    const boxHoverStyle = hover ? 
    {
        cursor: 'pointer',
        boxShadow: '0 0 5px 4px rgba(0, 0, 0, 0.1)',
        transform : 'scale(1.05)' 
    }
    : 
    {}

    const imageHoverStyle = hover ? 
    {
        opacity: 1
    }
    :
    {}

  return (
    <Link href={`/${categoryId}/${productId}`}>
        <Box sx={{minWidth: { xs: '150px', sm: '220px'}, maxWidth: { xs: '150px', sm: '220px'}, m: {sm: 2, xs:1.5}, boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)', borderRadius: 4, bgcolor: 'light.main', transition: 'all 1s ease', ...boxHoverStyle, borderStyle: 'solid', borderColor: 'secondary.main', borderWidth: '0.5px'}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
        
            <Box sx={{height: { xs: '120px', sm: '150px', lg: '200px'}, width: '100%', mb: 1.5, borderRadius: 4, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,  borderStyle: 'solid', borderColor: 'secondary.main', borderWidth: 0, borderBottomWidth: '0.5px', transition: 'all 1s ease', opacity: 0.8, ...imageHoverStyle }}>
                <img src={img_url} style={{width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 'inherit', borderTopLeftRadius: 'inherit'}} alt={`picture of ${title}`} />
            </Box>
            
            <Typography sx={{fontSize: 16, color: 'dark.main', textTransform: 'capitalize', textAlign: 'center', px: 1.5, lineHeight: 1}}>
                {title}
            </Typography>

            <Typography sx={{color: 'primary.main', fontSize: 15, my: 0.5, textAlign: 'center'}}>
                ${formatPrice(price)}
            </Typography>

        </Box>
    </Link>

  )
}

export default ProductCard