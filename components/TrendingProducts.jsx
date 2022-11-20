import { Box, Typography } from "@mui/material"
import formatImageUrl from "../utils/formatImageUrl"
import ProductCard from "./ProductCard"

const TrendingProducts = ({trendingProducts, baseUrl}) => {
  return (
    <Box sx={{ mt: 5}}>

        <Typography sx={{fontSize: 26, color: 'dark.main', textAlign: 'center'}}>
            Trending Gadgets
        </Typography>

        {
            trendingProducts.map(
                ({attributes}) => {
                    return(
                        <Box key={attributes.name}>
                            <Typography sx={{fontSize: 20, mt: 2, textTransform: 'capitalize', color: 'dark.main', textAlign: {xs: 'left', md: 'center'}, mx:{md: 2, xs: 1.5} }}>
                                {attributes.name}
                            </Typography>
                            <Box sx={{display: 'flex', overflowX: 'auto', width: '100%', justifyContent: {md: 'center'}}}>
                            {
                                attributes.products.data.slice(0, 3).map(
                                    ({id, attributes: {title, price, images }}) => {
                                        return <ProductCard img_url={formatImageUrl(baseUrl, images.data[0].attributes.url)} title={title} price={price}  productId={id} categoryId={attributes.name} key={id} />
                                    }
                                )
                            }
                            </Box>
                        </Box>
                    )
                }
            )
        }

    </Box>
  )
}

export default TrendingProducts