import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, FiltersSliceState, SortType, Status } from "../reduxTypes";
import axios from "axios";
import { RootState } from "../store";

export const fetchFilters = createAsyncThunk(
  "products/fetchFiltersStatus",
  async () => {
    const result = await axios.get("http://localhost:3001/filters");
    console.log(result);
    return result.data;
  }
);

const initialState: FiltersSliceState = {
  sort: { name: "популярность", order: "desc", sortValue: "rating" },

  filters: { product: [], child: [] },

  page: 0,
  pageCount: 0,

  status: Status.LOADING,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.rejected, (state) => {
        state.filters = { product: [], child: [] };
        state.status = Status.ERROR;
      })
      .addCase(fetchFilters.pending, (state) => {
        state.filters = { product: [], child: [] };
        state.status = Status.LOADING;
      })
      .addCase(
        fetchFilters.fulfilled,
        (
          state,
          action: PayloadAction<{ product: Filter[]; child: Filter[] }>
        ) => {
          state.filters = action.payload;
          state.status = Status.SUCCESS;
        }
      );
  },
});

export const { setPageCount, setPage, setSort } = filtersSlice.actions;
export const filtersSelector = (state: RootState) => state.filters;

export default filtersSlice.reducer;
