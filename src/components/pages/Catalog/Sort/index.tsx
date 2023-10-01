import React, { useState } from "react";
import styles from "./Sort.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SortType } from "../../../../redux/reduxTypes";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  filtersSelector,
  setSort,
} from "../../../../redux/slices/filtersSlice";

const sortList: SortType[] = [
  { name: "популярность", order: "desc", sortValue: "name" },
  { name: "популярность", order: "asc", sortValue: "name" },
  { name: "цена", order: "desc", sortValue: "price" },
  { name: "цена", order: "asc", sortValue: "price" },
];

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { sort: currentSort } = useAppSelector(filtersSelector);

  const handleSortClick = (index: number) => {
    setIsOpen(false);
    dispatch(setSort(sortList[index]));
  };

  return (
    <div className={styles.root__wrapper}>
      <div className={`${styles.root} ${isOpen ? styles.active : ""}`}>
        <div
          className={styles.dropdown__button}
          onClick={() => setIsOpen(!isOpen)}
        >
          Сортировка
          <span>
            {currentSort.name}{" "}
            <FontAwesomeIcon
              icon={currentSort.order === "asc" ? faCaretUp : faCaretDown}
            />
          </span>
        </div>
        <div
          className={`${styles.dropdown__content} ${
            isOpen ? styles.active : ""
          }`}
        >
          {sortList.map((sort, index) => {
            return (
              <div
                className={`selection ${
                  sortList[index].name === currentSort.name &&
                  sortList[index].order === currentSort.order
                    ? "active"
                    : ""
                }`}
                onClick={() => handleSortClick(index)}
                key={index}
              >
                {" "}
                <span>
                  {sort.name}{" "}
                  <FontAwesomeIcon
                    icon={sort.order === "asc" ? faCaretUp : faCaretDown}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sort;
