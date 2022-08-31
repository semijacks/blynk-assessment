import React from 'react'
import styles from '../styles/Product.module.css'

interface ProductProps {
  src: string
  text: string
  currentPrice: number
  oldPrice: number
  europeSize: number
  usSize: number
}

const Product = ({
  src,
  text,
  currentPrice,
  oldPrice,
  europeSize,
  usSize,
}: ProductProps) => {
  return (
    <div className={styles.product}>
      <img width={170} height={120} src={`${src}`} alt={`${text}-img`} />
      <div className={styles.productDetails}>
        <div className={styles.productDescription}>
          <h3 className={styles.productName}>{text}</h3>
          <div className={styles.productPricing}>
            <p className={styles.currentPrice}>{`$ ${currentPrice}`}</p>
            <p className={styles.oldPrice}>{`$ ${oldPrice}`}</p>
          </div>
        </div>
        <p
          className={styles.productSizes}
        >{`${europeSize} EU - ${usSize} US`}</p>
      </div>
    </div>
  )
}

export default Product
