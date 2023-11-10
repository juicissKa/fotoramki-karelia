import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../redux/reduxTypes";
import styles from "./ProductBlock.module.scss";

type ProductBlock = {
  id: number;
  images: string[];
  name: string;
  desc: string;
  price: string;
};

const ProductBlock: React.FC<ProductBlock> = ({
  id,
  images,
  name,
  desc,
  price,
}) => {
  return (
    <div className={styles.root}>
      <Link to={String(id)}>
        <img
          src={images ? images[0] : "/img/ramka.jpg"}
          alt=""
          width="296px"
          height="296px"
        />
      </Link>

      <div className={styles.info}>
        <Link to="" className={styles.product__name}>
          {name}
        </Link>
        <div className={styles.chars}>
          <p>{desc}</p>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default ProductBlock;
