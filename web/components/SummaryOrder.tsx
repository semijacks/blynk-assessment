import React from 'react'
import styles from '../styles/SummaryOrder.module.css'
import Product from './Product'
import { products } from '../data/products'
import Shipping from './Shipping'

const SummaryOrder = () => {
  return (
    <div className={styles.summaryOrderContainer}>
      <h2 className={styles.summaryOrderHeading}>Summary Order</h2>
      <p className={styles.summaryOrderDescription}>
        Check your item and select your shipping for better experience order
        item
      </p>
      <div className={styles.productContainer}>
        {products.map((product, idx) => (
          <Product
            key={idx}
            src={product.src}
            text={product.text}
            currentPrice={product.currentPrice}
            oldPrice={product.oldPrice}
            europeSize={product.europeSize}
            usSize={product.usSize}
          />
        ))}
      </div>
      <Shipping />
    </div>
  )
}

export default SummaryOrder
