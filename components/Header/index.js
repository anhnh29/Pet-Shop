import React, { useEffect } from "react";
// import { AiOutlineSearch } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./index.module.scss";

const Header = ({ children }) => {
  useEffect(() => {
    const element = document.getElementById("cart");
    element.addEventListener("click", funcShowCart);
    function funcShowCart() {
      console.log("Heress___Over");
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.topBar}>
          <div className={styles.topBarMain}>
            <div className={styles.topBarLink}>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Wish List</a>
                </li>
                <li>
                  <a href="#">Login/Register</a>
                </li>
              </ul>
            </div>
            <div className={styles.TopBarInfo}>
              <ul>
                <li>
                  <AiOutlineSearch style={{ color: "white" }} />
                </li>
                <li id="cart" className={styles.cart}>
                  <AiOutlineShoppingCart style={{ color: "white" }} />
                  <div className={styles.containerCart}>Cart item</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.hearder}>
          <div className={styles.logo}>
            <img
              alt="petzen"
              src="https://demo.webdigify.com/WCM01/WCM030_petzen/wp-content/themes/petzen/images/webdigify/logo.png"
            ></img>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.contentPage}>{children}</div>
    </div>
  );
};

export default Header;
// <div className={styles.}></div>
