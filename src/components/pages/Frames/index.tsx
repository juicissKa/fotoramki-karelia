import React from "react";
import styles from "./Frames.module.scss";
import Collage from "../../global/Collage";
import CollageItem from "../../global/Collage/CollageItem";
import ProductBlock from "../../global/ProductBlock";

const Canvas = () => {
  return (
    <div className={`container ${styles.root}`}>
      <section className={styles.frames__section}>
        <div className="text__wrapper">
          <h1>ФОТОРАМКИ</h1>
          <p>
            Задача организации, в особенности же убеждённость некоторых
            оппонентов требует определения и уточнения новых предложений.
            Картельные сговоры не допускают ситуации, при которой
            непосредственные участники технического прогресса, инициированные
            исключительно синтетически, призваны к ответу! Идейные соображения
            высшего порядка, а также высокотехнологичная концепция общественного
            уклада предоставляет широкие возможности для экспериментов,
            поражающих по своей масштабности и грандиозности.
          </p>
        </div>
        <div className={styles.frames}>
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: белый, с золотом",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: белый, без золота",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: бук",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: красное дерево",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: чёрный",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: тёмный вяз",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: тёмный дуб",
              price: "",
            }}
          />
          <ProductBlock
            {...{
              id: 1,
              name: "Фоторамка ПетроФрейм",
              images: ["/img/frame.png"],
              desc: "цвет: синий",
              price: "",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Canvas;
