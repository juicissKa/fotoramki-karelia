import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../redux/reduxTypes";
import styles from "./ProductBlock.module.scss";

const ProductBlock: React.FC<Product> = ({
  id,
  images,
  product_properties,
  product_info,
  product_children,
}) => {
  return (
    <div className={styles.root}>
      <Link to={String(id)}>
        <img src={images ? images[0] : "/img/ramka.jpg"} alt="" />
      </Link>

      <div className={styles.info}>
        <Link to="" className={styles.product__name}>
          {product_info.name}
        </Link>
        <div className={styles.chars}>
          <p>
            {product_properties
              .map((property) => property.name + ": " + property.value)
              .join(", ")}
          </p>
        </div>
        <div className="price">
          {product_children.reduce(
            (prev, current) => (prev < current.price ? prev : current.price),
            9999999
          )}{" "}
          ₽
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
