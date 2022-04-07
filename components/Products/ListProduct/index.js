import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART } from "../../../src/redux/type";

import Product from "../Product/index";
import styles from "./index.module.scss";
import callApi from "../../../pages/api/product";
import store from "../../../src/redux/store/index";
import { getListCart } from "../../../src/redux/selecter";
import { getProducts } from "../../../src/redux/action";

const ListProduct = () => {
  const listCart = useSelector(getListCart);
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>Featured Products</div>
      <div className={styles.listPro}>
        {list &&
          list.map((product, idx) => {
            return (
              <>
                <Product product={product} />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ListProduct;
