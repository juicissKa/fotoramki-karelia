import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductsSliceState, SortType, Status } from "../reduxTypes";
import { RootState } from "../store";
import { setPageCount } from "./filtersSlice";

export const fetchProducts = createAsyncThunk<Product[], SortType>(
  "products/fetchProductsStatus",
  async (sort, thunkAPI) => {
    const result = await axios.get(
      `http://localhost:3001/products/?sortBy=${sort.sortValue}&orderBy=${sort.order}`
    );
    thunkAPI.dispatch(setPageCount(Math.ceil(result.data.count / 12)));
    console.log(result.data.rows);
    return result.data.rows as Product[];
  }
);

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.rejected, (state) => {
        state.items = [];
        state.status = Status.ERROR;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.items = [];
        state.status = Status.LOADING;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        }
      );
  },
});

export const { setItems } = productsSlice.actions;
export const productsSelector = (state: RootState) => state.products;

export default productsSlice.reducer;
