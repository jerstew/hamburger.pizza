import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/images/logo.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamburger.pizza</title>
        <meta name="description" content="Hamburger AND pizza?!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/images/icon-16x16.png" />
        {/* 
        █▄█ ▄▀▄ █▄ ▄█ ██▄ █ █ █▀▄ ▄▀  ██▀ █▀▄ █▀▄ █ ▀█▀ ▀█▀ ▄▀▄ 
        █ █ █▀█ █ ▀ █ █▄█ ▀▄█ █▀▄ ▀▄█ █▄▄ █▀▄ █▀  █ █▄▄ █▄▄ █▀█ 
        and isn't that fun and nice for everyone
         */}
      </Head>
      <main className={styles.main}>
        <Image
          src={logo}
          className={styles.logoPng}
          alt="Hamburger pizza icon"
          width={120}
          height={120}
        />
      </main>
    </div>
  );
}
