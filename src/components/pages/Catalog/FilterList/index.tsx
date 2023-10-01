import React, { useEffect, useState } from "react";
import styles from "./FilterList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faL } from "@fortawesome/free-solid-svg-icons";
import { Filter } from "../../../../redux/reduxTypes";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { fetchProducts } from "../../../../redux/slices/productsSlice";
import {
  fetchFilters,
  filtersSelector,
  removeSelectedFilter,
  setSelectedFilter,
} from "../../../../redux/slices/filtersSlice";
import { debounce } from "lodash";

const FilterList: React.FC<{
  filter: Filter;
}> = ({ filter }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const { name, filters } = filter;

  const { selectedFilters } = useAppSelector(filtersSelector);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    currentFilter: string
  ) => {
    e.target.checked
      ? dispatch(setSelectedFilter({ filterValue: currentFilter, filter }))
      : dispatch(removeSelectedFilter({ filterValue: currentFilter, filter }));
  };

  const filterDebounce = () => {};

  return (
    <div className={styles.root}>
      <div className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        <p>{capitalizeFirstLetter(name)}</p>
        <span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={isOpen ? "active" : ""}
          />
        </span>
      </div>
      <div className={`${"dropdown__content"} ${isOpen ? "active" : ""}`}>
        {filters.map((f) => (
          <label className="selection">
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, f)}
              checked={
                selectedFilters
                  .find((elem) => elem.name === filter.name)
                  ?.filters.find((elem) => elem === f)
                  ? true
                  : false
              }
            />{" "}
            {f}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterList;
