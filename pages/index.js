import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "./index.module.scss";
import ListProduct from "../components/Products/ListProduct/index";
// json-server -p 4000 db.json

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pet Shop</title>
        <meta name="description" content="pet shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <ListProduct />
      </Header>
    </div>
  );
}
