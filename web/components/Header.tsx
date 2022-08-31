import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navigationLeft}>
        <Link href='/'>
          <a className={styles.logo}>Wearup.</a>
        </Link>
        <Link href='/'>
          <a className={styles.pageName}>Order Overview</a>
        </Link>
      </div>
      <div className={styles.Stages}>
        <div className={styles.stage}>
          <div className={styles.activeStageNumber}>✔️</div>
          <Link href='/'>
            <a className={styles.stageName}>Information</a>
          </Link>
        </div>
        <div className={styles.stage}>
          <div className={styles.inactiveStageNumber}>2</div>
          <Link href='/'>
            <a className={styles.stageName}>Payment Details</a>
          </Link>
        </div>
        <div className={styles.stage}>
          <div className={styles.inactiveStageNumber}>3</div>
          <Link href='/'>
            <a className={styles.stageName}>Complete Order</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
