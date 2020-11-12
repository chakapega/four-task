import Head from 'next/head';
import SearchPanel from '../components/SearchPanel';
import styles from '../styles/Index.module.css';

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchPanel />
      </main>
    </>
  );
}
