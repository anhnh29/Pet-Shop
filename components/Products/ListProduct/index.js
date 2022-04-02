import React from "react";

import Product from "../Product/index";
import styles from "./index.module.scss";

const ListProduct = () => {
  const list = [
    {
      name: "Pedigree Biscrok Biscuits Dog Treat",
      price: "$50.00 - $90.00",
      img: "https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/01-256x320.jpg",
      configOpt: false,
    },
    {
      name: "Pedigree Biscrok Biscuits Dog Treat",
      price: "$50.00 - $90.00",
      img: "https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/uploads/2017/01/18-256x320.jpg",
      configOpt: true,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Featured Products</div>
      <div className={styles.listPro}>
        {list &&
          list.map((product, idx) => {
            return (
              <div key={idx}>
                <Product product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListProduct;
