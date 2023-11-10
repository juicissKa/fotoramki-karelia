import React, { useEffect, useRef } from "react";
import ProductBlock from "../../global/ProductBlock";
import styles from "./Catalog.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  fetchProducts,
  productsSelector,
} from "../../../redux/slices/productsSlice";
import { Status } from "../../../redux/reduxTypes";
import ProductBlockSkeleton from "../../global/ProductBlock/Skeleton";

import FilterList from "./FilterList";
import Sort from "./Sort";
import Pagination from "../../global/Pagination";
import {
  fetchFilters,
  filtersSelector,
} from "../../../redux/slices/filtersSlice";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import SearchBlock from "./SearchBlock";

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, status: productsStatus } = useAppSelector(productsSelector);
  const {
    filters,
    status: filtersStatus,
    sort,
    selectedFilters,
  } = useAppSelector(filtersSelector);

  const isMounted = useRef(false);
  const isSearch = useRef(false);

  const submitFilters = () => {
    dispatch(fetchProducts({ sort, selectedFilters }));
    dispatch(fetchFilters());
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(selectedFilters);
      console.log(queryString);

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
      submitFilters();
    }

    isSearch.current = false;
  }, [sort, dispatch]);

  return (
    <div className={`container ${styles.root}`}>
      <div className={styles.filters}>
        <div className={styles.filter__section}>
          {filters.map((filter) => (
            <FilterList filter={filter} key={filter.name} />
          ))}
          <button onClick={submitFilters}>Применить</button>
        </div>
      </div>
      <div className={styles.products__block}>
        <div className={styles.search__block}>
          <SearchBlock />
          <Sort />
        </div>
        <div className={styles.products}>
          {productsStatus === Status.LOADING
            ? [...new Array(9)].map((elem, index) => (
                <ProductBlockSkeleton key={index} />
              ))
            : items.map((item) => {
                const desc = `материал: ${item.material}, ширина: ${item.width} мм, цвет: ${item.color.name}`;
                const price = `${item.price} ₽ / п.м.`;
                return (
                  <ProductBlock
                    key={item.id}
                    {...{
                      id: item.id,
                      name: item.name,
                      desc,
                      price,
                      images: item.images,
                    }}
                  />
                );
              })}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
