import React from "react";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";

import styles from "./index.module.scss";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={product.img}></img>
        <div className={styles.iconOpt}>
          <div className={styles.iconHeart}>
            <AiOutlineHeart />
          </div>
          <div className={styles.iconZoom}>
            <AiOutlineZoomIn />
          </div>
        </div>
      </div>
      <div className={styles.btnAction}>
        <button> {product.configOpt ? "SELECT OPTION" : "ADD TO CART"} </button>
      </div>
      <div className={styles.detail}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.price}</div>
      </div>
    </div>
  );
};

export default Product;
