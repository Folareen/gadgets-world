import { Box } from "@mui/material"
import { useState } from "react"
import formatImageUrl from "../utils/formatImageUrl"

const ProductGallery = ({images, baseUrl}) => {
    const [imageInView, setImageInView] = useState(formatImageUrl(baseUrl, images[0].attributes.url))

  return (
    <Box sx={{ p: 2, width: {sx: '100%', md: '500px'}}}>

        <Box sx={{width: '100%' , height: {xs: '300px', sm: '400px', md: '400px'}, mb: 1.5, borderRadius: 4, bgcolor: 'light.main'}}>
            <img src={imageInView} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}} />
        </Box>

        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', maxWidth: '400px', mx: 'auto'}}>
            {
                images.map(
                    ({attributes:{url}}) => {
                        return (
                            <Box onClick={() => setImageInView(formatImageUrl(baseUrl, url))} key={url} sx={{width: {xs: '70px', md: '80px'}, height: {xs: '70px', md: '80px'}, borderRadius: 2, opacity: (
                                formatImageUrl(baseUrl, url) === imageInView ? 1 : 0.6
                            ), '&:hover': {
                                cursor: 'pointer', opacity: 1
                            }}}>

                                <img src={formatImageUrl(baseUrl, url)} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}}  />
                            </Box>
                        )
                    }
                )
            }
        </Box>
    </Box>
  )
}

export default ProductGallery