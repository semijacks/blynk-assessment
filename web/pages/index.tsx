import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import PaymentDetails from '../components/PaymentDetails'
import SummaryOrder from '../components/SummaryOrder'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wearup</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        <SummaryOrder />
        <PaymentDetails />
      </main>
    </div>
  )
}

export default Home
