import React from "react";
import CategoryCard from "../../CategoryCard";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={`container ${styles.root}`}>
      <div className={styles.categories__big}>
        <CategoryCard title={"Рамки"} imgurl={"/img/ramka.jpg"} />
        <CategoryCard title={"Холсты"} imgurl={"/img/holst.jpg"} />
        <CategoryCard title={"Картины"} imgurl={"/img/kartina.jpg"} />
      </div>
      <div className={styles.categories__small}>
        <CategoryCard title={"Подарки"} imgurl={"/img/podarok.jpg"} />
        <CategoryCard title={"Сувениры"} imgurl={"/img/souvenir.jpg"} />
        <CategoryCard title={"Украшения"} imgurl={"/img/jewerly.jpg"} />
        <CategoryCard title={"Другое"} imgurl={"/img/other.jpg"} />
      </div>
    </div>
  );
};

export default Home;
