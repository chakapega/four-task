import Head from 'next/head';
import SearchPanel from '../components/SearchPanel';
import styles from '../styles/Index.module.css';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Four task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchPanel />
      </main>
    </>
  );
};

export default Index;
