import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetAllProduct from "../../api/productApi/GetAllProduct";

const initialState = {
  Products: [],
  loading: false,
};

export const getAllProductData = createAsyncThunk(
  "getAllProductData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await GetAllProduct();
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Fetch Data API Failed");
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProductData.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllProductData.fulfilled, (state, { payload }) => {
      state.Products = payload;
      state.loading = false;
    });
    builder.addCase(getAllProductData.rejected, (state, { payload }) => {
      state.Products = [];
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
