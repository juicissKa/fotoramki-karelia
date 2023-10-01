import React from "react";
import ReactPaginate from "react-paginate";
import { filtersSelector, setPage } from "../../../redux/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import styles from "./Pagination.module.scss";

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pageCount, page } = useAppSelector(filtersSelector);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="Вперёд"
      onPageChange={(event) => dispatch(setPage(event.selected))}
      pageCount={pageCount}
      previousLabel="Назад"
      renderOnZeroPageCount={null}
      pageRangeDisplayed={0}
      marginPagesDisplayed={0}
      pageLabelBuilder={(page) => `${page} из ${pageCount}`}
      forcePage={page}
    />
  );
};

export default Pagination;
