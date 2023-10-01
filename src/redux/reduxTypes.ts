export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type Filter = {
  name: string;
  eng_name: string;
  filters: string[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  width: number;
  material: string;
  images: string[];
  description: string;
  color_id: number;
  color: Color;
};

export type Color = {
  id: number;
  name: string;
  code: string[];
};

export type SortType = {
  name: string;
  order: "asc" | "desc";
  sortValue: string;
};

export type ProductsSliceState = {
  items: Product[];
  status: Status;
};

export type FiltersSliceState = {
  sort: SortType;
  filters: Filter[];
  selectedFilters: Filter[];
  page: number;
  pageCount: number;
  status: Status;
};
