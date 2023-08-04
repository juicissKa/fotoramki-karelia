import React, { useEffect, useState } from "react";
import styles from "./ProductInfo.module.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../redux/reduxTypes";
import ImageSlider from "../../ImageSlider";

const ProductInfo: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState(0);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/products/${id}`);
        if (!res.data) {
          throw new Error("Товар не найден!");
        }
        setProduct(res.data);
      } catch (error) {
        navigate("/");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  return (
    <div className={`container ${styles.root}`}>
      <ImageSlider images={product?.images} />
      <div className={styles.product__info__wrapper}>
        <h1 className="title">{product?.product_info.name}</h1>
        <p className={styles.product__small__desc}>
          {product?.product_properties
            .map((property) => property.name + ": " + property.value)
            .join(", ")}
        </p>
        <div className={styles.product__sizes}>
          {product?.product_children.map((child, index) => (
            <div
              className={`${styles.size} ${
                currentProduct === index ? styles.active : ""
              }`}
              onClick={() => setCurrentProduct(index)}
            >
              {child.child_property.value}
            </div>
          ))}
        </div>
        <div className="price">
          {product?.product_children[currentProduct].price} ₽
        </div>
        <div className={styles.add__wrapper}>
          <button className="add__to__cart">Добавить в корзину</button>
          <button className="add__to__favorites">Добавить в избранное</button>
        </div>
        <div className="text-block">
          <h1>Описание</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            earum dolore obcaecati? Repellat, aliquam! Corrupti placeat pariatur
            reiciendis dolorum enim exercitationem veritatis facilis illum
            nostrum labore sed hic, aut inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
