import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetUserCart from "../../api/cartApi/GetUserCart";
import AddToCart from "../../api/cartApi/AddToCart";

const initialState = {
  Cart: [],
  addressFormData: {},
  paymentMethod: null,
  acceptedPayment: "cash",
  loading: true,
  saveCartData: {},
  addToCartSavedData: {},
};

export const getCartData = createAsyncThunk(
  "getCartData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await GetUserCart(data);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Fetch Data API Failed");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddress: (state, { payload }) => {
      state.addressFormData = payload;
    },
    setPaymentMethod: (state, { payload }) => {
      state.paymentMethod = payload;
    },
    saveAddToCartData: (state, { payload }) => {
      state.addToCartSavedData = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCartData.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getCartData.fulfilled, (state, { payload }) => {
      state.Cart = payload[0].products;
      state.loading = false;
    });
    builder.addCase(getCartData.rejected, (state, { payload }) => {
      state.Cart = [];
      state.loading = false;
    });
  },
});

export const { setAddress, setPaymentMethod,  saveAddToCartData } = cartSlice.actions;

export default cartSlice.reducer;
