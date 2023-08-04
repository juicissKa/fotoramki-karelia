import React, { useState } from "react";
import styles from "./ImageSlider.module.scss";

const ImageSlider: React.FC<{ images: string[] | null | undefined }> = ({
  images,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleUpClick = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleDownClick = () => {
    if (images?.length && activeSlide < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.slide__list}>
        <div className={styles.arrow__up} onClick={handleUpClick}>
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256,478,80,302l21.2-21.21L241,420.6V34h30V420.6L410.84,280.75,432,302Z" />
          </svg>
        </div>
        <div
          className={styles.slider__wrapper}
          style={{
            transform: `translateY(${
              activeSlide > 2 ? (activeSlide - 2) * -170 : 0
            }px)`,
          }}
        >
          <div
            className={styles.slider}
            style={{ transform: `translateY(${activeSlide * 170}px)` }}
          ></div>
        </div>
        <div
          className={styles.slides}
          style={{
            transform: `translateY(${
              activeSlide > 2 ? (activeSlide - 2) * -170 : 0
            }px)`,
          }}
        >
          {images ? (
            images.map((img, index) => (
              <img
                src={img}
                alt=""
                className={styles.slide__small}
                onClick={() => setActiveSlide(index)}
                style={{ opacity: index === activeSlide ? "100%" : "50%" }}
              />
            ))
          ) : (
            <img
              src={"/img/ramka.jpg"}
              alt=""
              className={styles.slide__small}
              onClick={() => setActiveSlide(0)}
              style={{ opacity: "100%" }}
            />
          )}
        </div>
        <div className={styles.arrow__down} onClick={handleDownClick}>
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256,478,80,302l21.2-21.21L241,420.6V34h30V420.6L410.84,280.75,432,302Z" />
          </svg>
        </div>
      </div>
      <div className={styles.slide__wrapper}>
        <div
          className={styles.carousel}
          style={{ transform: `translateY(${activeSlide * -600}px)` }}
        >
          {images ? (
            images.map((img) => (
              <img src={img} alt="" className={styles.slide__big} />
            ))
          ) : (
            <img
              src={"/img/ramka.jpg"}
              alt=""
              className={styles.slide__big}
              onClick={() => setActiveSlide(0)}
              style={{ opacity: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
