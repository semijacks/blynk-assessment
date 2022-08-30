import React from 'react'
import styles from '../styles/SummaryOrder.module.css'

export const SummaryOrder = () => {
  return (
    <div className={styles.summaryOrderContainer}>
      <h2 className={styles.summaryOrderHeading}>Summary Order</h2>
      <p className={styles.summaryOrderDescription}>
        Check your item and select your shipping for better experience order
        item
      </p>
    </div>
  )
}
