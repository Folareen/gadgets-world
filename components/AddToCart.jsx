import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import {useRouter} from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProduct, removeProduct } from "../features/cartSlice";

const AddToCart = ({image, title, price, productId}) => {
    const state = useSelector(state => state.cart)

    const [quantity, setQuantity] = useState(state.products.find(
        (product) => product.productId === productId
    )?.quantity || 1)

    const {push} = useRouter()
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addProduct({
            productDetails : {productId, image, title, price, quantity} , state
        }))
        toast.success(`${quantity} ${title} added to cart.`)
    }

    const removeFromCart = () => {

        dispatch(removeProduct({
            productId, state
        }))
        toast.error(`${title} removed from cart.`)

    }

  return (
    <Box >

        <Box sx={{border: '1px solid grey', borderRadius: 1, display: 'flex', alignItems: 'center', mb: 2, width: 'max-content'}}>
            <Button onClick={() => setQuantity(quantity + 1 )} color="success">
                <AddRoundedIcon />
            </Button>
            <Typography sx={{textAlign: 'center', color: 'dark.main', px: 4, borderRight: '1px solid grey', borderLeft: '1px solid grey'}} >
                {quantity}
            </Typography>
            <Button onClick={() => {
                if(quantity > 1) setQuantity(quantity - 1 )
            }} color="error">
                <RemoveRoundedIcon />
            </Button>
        </Box>

        <Box sx={{ m: 2, ml: 0}}>

            <Button color="success" variant='contained' sx={{borderRadius: 2, m: 1, ml: 0, px: 2}} onClick={() => {
                push('/checkout')
            }}>
                Buy now <ShoppingBagRoundedIcon fontSize="small" sx={{mx: 1}}/>
            </Button>

            <Button color="success" variant='outlined' sx={{borderRadius: 2, m: 1, px: 2}} onClick={addToCart}>
                Add to cart <AddShoppingCartRoundedIcon fontSize="small" sx={{mx: 1}} />
            </Button>

        </Box>

    </Box>
  )
}

export default AddToCart