import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import iconPng from "../public/images/icon-16x16.png";
import constructionGif from "../public/images/under_construction.gif";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamburger.pizza</title>
        <meta name="description" content="Hamburger AND pizza?!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.terminalCard + " terminal-card"}>
          <header>
            <Image
              src={iconPng}
              className={styles.iconPng}
              alt="Hamburger pizza icon"
              width={16}
              height={16}
            />
            <p className={styles.title}>Hamburger.pizza</p>
          </header>
          <div>
            <p>Website coming soon</p>
          </div>
        </div>
        <Image
          src={constructionGif}
          className={styles.homeGif}
          alt="Animated gif depicting a construction site"
          width={177}
          height={175}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </main>
    </div>
  );
}
