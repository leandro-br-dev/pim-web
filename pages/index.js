import Head from 'next/head';
import Header from '../components/home/header';
import Main from '../components/home/main';
import Footer from '../components/home/footer';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="Content-Language" content="pt-br" />
        <title>Quantum Finance - Seu banco digital de criptomoedas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}
