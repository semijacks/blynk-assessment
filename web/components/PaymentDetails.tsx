import React from 'react'
import styles from '../styles/PaymentDetails.module.css'
import { Input } from './Input'

const PaymentDetails = () => {
  return (
    <div className={styles.paymentDetailsContainer}>
      <h2 className={styles.paymentDetailsHeading}>Payment Details</h2>
      <p className={styles.paymentDetailsDescription}>
        Complete your item purchase by providing your order payment details
      </p>
      <Input />
    </div>
  )
}

export default PaymentDetails
