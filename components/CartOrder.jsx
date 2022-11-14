import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { IconButton, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { toast } from "react-toastify";
import { addProduct, removeProduct } from "../features/cartSlice";

const CartOrder = ({ image, title, price, productId }) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const quantity = () => {
    return (state.products.find(
    (product) => product.productId === productId
  ).quantity)
  } ;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          width: "max-content",
        }}
      >
        <IconButton
          onClick={() => {
            const newQuantity = quantity() + 1;
            dispatch(
              addProduct({
                productDetails: {
                  productId,
                  image,
                  title,
                  price,
                  quantity: newQuantity,
                },
                state,
              })
            );
            // toast.success(`${quantity()} ${title} added to cart.`);
          }}
          color="success"
          sx={{ border: "0.5px solid grey", p: { xs: 0.5, sm: 1 } }}
        >
          <AddRoundedIcon fontSize="small" />
        </IconButton>

        <Typography
          sx={{
            textAlign: "center",
            color: "dark.main",
            px: 2,
            py: 1,
            fontSize: 18,
          }}
        >
          {quantity()}
        </Typography>

        <IconButton
          onClick={() => {
            if (quantity() > 0) {
              const newQuantity = quantity() - 1;
              dispatch(
                addProduct({
                  productDetails: {
                    productId,
                    image,
                    title,
                    price,
                    quantity: newQuantity,
                  },
                  state,
                })
              );
            //   toast.error(`${quantity() - newQuantity} ${title} removed from cart`)
            }
          }}
          color="error"
          sx={{ border: "0.5px solid grey", p: { xs: 0.5, sm: 1 } }}
        >
          <RemoveRoundedIcon fontSize="small" />
        </IconButton>
      </Box>

      <IconButton sx={{ color: "red", p: { xs: 0.5, sm: 1 }, ml: 4 }}
        onClick={()=> {
            dispatch(removeProduct({
                productDetails: {
                    productId,
                    title,
                    price,
                    quantity: quantity()
                },state
            }))
            toast.error(`${title} removed from cart`)
        }}
      >
        <ClearRoundedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CartOrder;
