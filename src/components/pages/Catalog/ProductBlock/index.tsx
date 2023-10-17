import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../redux/reduxTypes";
import styles from "./ProductBlock.module.scss";

const ProductBlock: React.FC<Product> = ({
  id,
  images,
  name,
  color,
  width,
  material,
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
          <p>
            материал: {material}, ширина: {width} мм, цвет: {color.name}
          </p>
        </div>
        <div className="price">{price} ₽ / п.м.</div>
      </div>
    </div>
  );
};

export default ProductBlock;
