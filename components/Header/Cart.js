import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../src/redux/action";
import { getListCart, getTotalCart } from "../../src/redux/selecter";
import styles from "./index.module.scss";

const Cart = () => {
  const listCart = useSelector(getListCart);
  const total = useSelector(getTotalCart);
  const dispatch = useDispatch();

  return (
    <div className={styles.cartContainer}>
      {listCart.map((item) => {
        return (
          <div className={styles.itemCart} key={item.id}>
            <div className={styles.img}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.price}>{item.price}</div>
            </div>
            <div className={styles.react}>
              <ButtonGroup aria-label="Basic example">
                <Button
                  onClick={() => {
                    dispatch(decreaseQuantity({ ...item }));
                  }}
                  variant="secondary"
                >
                  -
                </Button>
                <Button variant="secondary">{item.quantity}</Button>
                <Button
                  onClick={() => {
                    dispatch(increaseQuantity({ ...item }));
                  }}
                  variant="secondary"
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
