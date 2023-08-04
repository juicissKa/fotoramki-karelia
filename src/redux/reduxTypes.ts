export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type Filter = {
  name: string;
  eng_name: string;
  filters: FilterValue[];
};

export type FilterValue = {
  id: number;
  value: string;
};

export type ProductInfo = {
  id: number;
  name: string;
  description: string | null;
  type: string;
};

export type ProductProperty = {
  id: number;
  name: string;
  value: string;
};

export type ProductChild = {
  id: number;
  price: number;
  count: number;
  child_property: ProductProperty;
};

export type Product = {
  id: number;
  images: string[] | null;
  product_properties: ProductProperty[];
  product_info: ProductInfo;
  product_children: ProductChild[];
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
  filters: {
    product: Filter[];
    child: Filter[];
  };
  page: number;
  pageCount: number;
  status: Status;
};
