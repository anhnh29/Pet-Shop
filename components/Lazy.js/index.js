import React, { useEffect } from "react";
import styles from "./index.module.scss";

const Lazy = () => {
  const load = (img) => {
    if (img) {
      console.log(img);
      const url = img.getAttribute("src-lazy");
      img.setAttribute("src", url);
    }
  };
  useEffect(() => {
    const lazyImg = document.querySelectorAll("[src-lazy]");

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          load(en.target);
        }
      });
    });

    lazyImg.forEach((item) => {
      observer.observe(item);
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>Hearder</div>
      <div className={styles.title}>Title</div>
      <div className={styles.content}>Content</div>
      <div className={styles.images}>
        <img
          src-lazy="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg"
          alt=""
          src="#"
        />
        <img
          src-lazy="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg"
          alt=""
          src="#"
        />
        <img
          src-lazy="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg"
          alt=""
          src="#"
        />
        <img
          src-lazy="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg"
          alt=""
          src="#"
        />
        <img
          src-lazy="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg"
          alt=""
          src="#"
        />
        <img
          src-lazy="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg"
          alt=""
          src="#"
        />
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

export default Lazy;
