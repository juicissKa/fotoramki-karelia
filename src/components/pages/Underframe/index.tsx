import React from "react";
import styles from "./Underframe.module.scss";
import Collage from "../../global/Collage";
import CollageItem from "../../global/Collage/CollageItem";

const Underframe = () => {
  return (
    <div className={`container ${styles.root}`}>
      <section className={styles.underframe__section}>
        <div className={"text__wrapper"}>
          <h1>ПОДРАМНИК</h1>

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
      </section>
    </div>
  );
};

export default Underframe;
