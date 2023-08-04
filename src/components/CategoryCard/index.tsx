import React from "react";
import styles from "./CategoryCard.module.scss";
import { Link } from "react-router-dom";

const CategoryCard: React.FC<Record<string, string>> = ({ title, imgurl }) => {
  return (
    <Link to="" className={styles.root}>
      <img src={imgurl} alt="" />
      <div className={styles.title}>{title}</div>
    </Link>
  );
};

export default CategoryCard;
