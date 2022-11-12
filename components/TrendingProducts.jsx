import { Box, Typography } from "@mui/material"
import formatImageUrl from "../utils/formatImageUrl"
import ProductCard from "./ProductCard"

const TrendingProducts = ({trendingProducts}) => {
  return (
    <Box sx={{textAlign: 'center', mt: 5}}>

        <Typography sx={{fontSize: 26, color: 'dark.main'}}>
            Trending Gadgets
        </Typography>

        {
            trendingProducts.map(
                ({attributes}) => {
                    return(
                        <>
                            <Typography sx={{fontSize: 20, mt: 2, textTransform: 'capitalize', color: 'dark.main' }}>
                                {attributes.name}
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                            {
                                attributes.products.data.slice(0, 3).map(
                                    ({id, attributes: {title, price, images }}) => {
                                        return <ProductCard img_url={formatImageUrl(images.data[0].attributes.url)} title={title} price={price}  productId={id} categoryId={attributes.name} key={id} />
                                    }
                                )
                            }
                            </Box>
                        </>
                    )
                }
            )
        }

    </Box>
  )
}

export default TrendingProducts