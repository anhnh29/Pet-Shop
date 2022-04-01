import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pet Shop</title>
        <meta name="description" content="pet shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
