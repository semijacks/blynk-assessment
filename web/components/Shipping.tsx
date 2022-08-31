import React from 'react'
import { shippingInfo } from '../data/shipping'
import styles from '../styles/Shipping.module.css'

interface ShippingProps {
  src: string
  company: string
  deliveryTime: string
  price: string
}

const Shipping = ({ src, company, deliveryTime, price }: ShippingProps) => {
  return (
    <div className={styles.shippingMethodDetails}>
      <img src={src} width={120} height={80} />
      <div className={styles.shippingMethodDescription}>
        <div className={styles.shippingMethodDeliveryInfo}>
          <h4 className={styles.shippingMethodDeliveryCompany}>{company}</h4>
          <p
            className={styles.shippingMethodDeliveryTime}
          >{`Delivery: ${deliveryTime}`}</p>
        </div>
        <div className={styles.shippingMethodPricing}>
          <label className={styles.shippingMethodPricingText}>{price}</label>
          <input style={{ accentColor: 'black' }} type='radio' />
        </div>
      </div>
    </div>
  )
}

const ShippingInfo = () => {
  return (
    <div>
      <h4>Available Shipping Method:</h4>
      <div className={styles.shippingMethodContainer}>
        <Shipping
          src={shippingInfo[0].src}
          company={shippingInfo[0].company}
          deliveryTime={shippingInfo[0].deliveryTime}
          price={shippingInfo[0].price}
        />
      </div>

      <h4 className={styles.internationalShippingText}>
        Available International Shipping:
      </h4>
      <div className={styles.shippingMethodContainer}>
        <Shipping
          src={shippingInfo[1].src}
          company={shippingInfo[1].company}
          deliveryTime={shippingInfo[1].deliveryTime}
          price={shippingInfo[1].price}
        />
      </div>
    </div>
  )
}

export default ShippingInfo
