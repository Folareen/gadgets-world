import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  quantity: 0,
  subTotal: 0.0,
};

if (typeof window === "undefined") {
  initialState = {
    products: [],
    quantity: 0,
    subTotal: 0.0,
  };
} else {
  initialState = JSON.parse(localStorage.getItem("cart")) || {
    products: [],
    quantity: 0,
    subTotal: 0.0,
  };
}

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload.state.products.find((product) => {
        return product.productId == action.payload.productDetails.productId;
      });

      if (productToAdd) {
        const productToAddIndex = action.payload.state.products.findIndex(
          (product) => {
            return product.productId == action.payload.productDetails.productId;
          }
        );
        let productsArr = [...action.payload.state.products];
        productsArr.splice(productToAddIndex, 1);
        productsArr.push(action.payload.productDetails);

        const newCart = {
          products: productsArr,
          quantity:
            action.payload.state.quantity +
            action.payload.productDetails.quantity -
            productToAdd.quantity,
          subTotal: (
            Number(action.payload.state.subTotal) -
            Number(productToAdd.quantity * productToAdd.price) +
            Number(
              action.payload.productDetails.quantity *
                action.payload.productDetails.price
            )
          ).toFixed(2),
        };
        state.products = newCart.products;
        state.quantity = newCart.quantity;
        state.subTotal = newCart.subTotal;

        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        const newCart = {
          products: [
            ...action.payload.state.products,
            action.payload.productDetails,
          ],
          quantity:
            action.payload.productDetails.quantity +
            action.payload.state.quantity,
          subTotal: (
            Number(action.payload.state.subTotal) +
            Number(
              action.payload.productDetails.quantity *
                action.payload.productDetails.price
            )
          ).toFixed(),
        };
        state.products = newCart.products;
        state.quantity = newCart.quantity;
        state.subTotal = newCart.subTotal;

        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
    },
    removeProduct: (state, action) => {
      console.log("remove product");
    },
  },
});

export const { addProduct, removeProduct } = cart.actions;
export default cart.reducer;
