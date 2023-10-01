import { Filter } from "../redux/reduxTypes";

export const parseFilters = (filters: Filter[]) => {
  return filters.map((elem) => {
    return {
      name: elem.name,
      filters: elem.filters.map((filter) => filter),
    };
  });
};
