import React from "react";
import { Pagination } from "react-bootstrap/Pagination";
import { Button } from "react-bootstrap";
import styles from "./index.module.scss";

const PaginationHooks = (props) => {
  const { pageSize, current, total, onChange } = props;

  const sizeItemPage = Math.round(total / pageSize);
  console.log("sizeItemPage", sizeItemPage);
  let arr = [];
  for (let i = 0; i < sizeItemPage; i++) {
    arr.push(i + 1);
  }
  console.log(props);
  return (
    <div className={styles.containerPagination}>
      {arr.map((item) => {
        return (
          <Button
            active={`${item === current ? "true" : "false"}`}
            key={`btn-${item}`}
            type="button"
            onClick={() => {
              onChange(item);
            }}
            style={{
              border: `${item === current ? "1px solid blue" : "white"}`,
              color: `${item === current ? "blue" : "#333"}`,
            }}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default PaginationHooks;
