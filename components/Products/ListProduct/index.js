import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART } from "../../../src/redux/type";

import Product from "../Product/index";
import styles from "./index.module.scss";
import callApi from "../../../pages/api/product";
import store from "../../../src/redux/store/index";
import { getListCart } from "../../../src/redux/selecter";
import { getProducts } from "../../../src/redux/action";
import PaginationHooks from "../../../src/redux/hooks/PaginationHooks";

const ListProduct = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((store) => store.products);

  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);
  const pageSize = 3;

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  useEffect(() => {
    setList(listCart);
  }, [listCart]);

  const handleChanePage = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Featured Products</div>
      <div className={styles.listPro}>
        {list &&
          list.map((product, idx) => {
            if (idx >= minIndex && idx < maxIndex) {
              return (
                <>
                  <Product product={product} />
                </>
              );
            }
          })}
      </div>
      <PaginationHooks
        pageSize={pageSize}
        current={current}
        total={listCart.length}
        onChange={handleChanePage}
      />
    </div>
  );
};

export default ListProduct;
