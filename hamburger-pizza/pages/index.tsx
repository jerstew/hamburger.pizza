import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamburger.pizza</title>
        <meta name="description" content="Hamburger AND pizza?!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hamburger.pizza</h1>

        <p className={styles.description}>and isn't that fun for everyone</p>
      </main>
    </div>
  );
}
