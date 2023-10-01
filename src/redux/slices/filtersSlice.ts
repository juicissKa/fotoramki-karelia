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

  filters: [],
  selectedFilters: [],

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
    setSelectedFilter(
      state,
      action: PayloadAction<{
        filterValue: string;
        filter: Filter;
      }>
    ) {
      const { filterValue, filter } = action.payload;

      const index = state.selectedFilters.findIndex(
        (elem) => elem.eng_name === filter.eng_name
      );

      if (index > -1) {
        state.selectedFilters[index].filters.push(filterValue);
      } else {
        state.selectedFilters.push({
          name: filter.name,
          eng_name: filter.eng_name,
          filters: [filterValue],
        });
      }
    },
    removeSelectedFilter(
      state,
      action: PayloadAction<{
        filterValue: string;
        filter: Filter;
      }>
    ) {
      const { filterValue, filter } = action.payload;

      const filterIndex = state.selectedFilters.findIndex(
        (elem) => elem.eng_name === filter.eng_name
      );

      if (filterIndex > -1) {
        const foundFilters = state.selectedFilters[filterIndex].filters;

        const valueIndex = foundFilters.findIndex(
          (elem) => elem === filterValue
        );

        if (valueIndex > -1)
          foundFilters.length > 1
            ? foundFilters.splice(valueIndex, 1)
            : state.selectedFilters.splice(filterIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.rejected, (state) => {
        state.filters = [];
        state.status = Status.ERROR;
      })
      .addCase(fetchFilters.pending, (state) => {
        state.filters = [];
        state.status = Status.LOADING;
      })
      .addCase(
        fetchFilters.fulfilled,
        (state, action: PayloadAction<Filter[]>) => {
          state.filters = action.payload;
          state.status = Status.SUCCESS;
        }
      );
  },
});

export const {
  setPageCount,
  setPage,
  setSort,
  setSelectedFilter,
  removeSelectedFilter,
} = filtersSlice.actions;
export const filtersSelector = (state: RootState) => state.filters;

export default filtersSlice.reducer;
