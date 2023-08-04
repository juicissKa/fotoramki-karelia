import React, { useEffect, useRef } from "react";
import ProductBlock from "../../ProductBlock";
import styles from "./Catalog.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  fetchProducts,
  productsSelector,
} from "../../../redux/slices/productsSlice";
import { Status } from "../../../redux/reduxTypes";
import ProductBlockSkeleton from "../../ProductBlock/Skeleton";

import FilterList from "../../FilterList";
import Sort from "../../Sort";
import Pagination from "../../Pagination";
import {
  fetchFilters,
  filtersSelector,
} from "../../../redux/slices/filtersSlice";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, status: productsStatus } = useAppSelector(productsSelector);
  const {
    filters,
    status: filtersStatus,
    sort,
  } = useAppSelector(filtersSelector);

  const isMounted = useRef(false);
  const isSearch = useRef(false);

  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({});

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [dispatch, navigate]);

  // Проверяем параметры и сохраняем в redux при первом рендере
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //   }

  //   isSearch.current = true;
  // }, []);

  // Если был первый рендер, запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      dispatch(fetchProducts(sort));
    }

    isSearch.current = false;
  }, [sort]);

  return (
    <div className={`container ${styles.root}`}>
      <div className={styles.filters}>
        <Sort />
        <div className={styles.filter__section}>
          {filtersStatus === Status.SUCCESS &&
            filters.product.map((filter) => (
              <FilterList {...filter} key={filter.name} />
            ))}
          {filtersStatus === Status.SUCCESS &&
            filters.child.map((filter) => (
              <FilterList {...filter} key={filter.name} />
            ))}
        </div>
      </div>
      <div className={styles.products}>
        {productsStatus === Status.LOADING
          ? [...new Array(9)].map((elem, index) => (
              <ProductBlockSkeleton key={index} />
            ))
          : items.map((item) => <ProductBlock key={item.id} {...item} />)}
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
