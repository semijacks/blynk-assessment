import React from 'react'
import styles from '../styles/Input.module.css'

export const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>Email Address</label>
      <div className={styles.inputTextContainer}>
        <div className={styles.inputText}>
          <p className={styles.inputIcon}>@</p>
          <input
            className={styles.input}
            type='text'
            placeholder='Enter your email'
          />
        </div>
        <div className={styles.inputCheck}>✔️</div>
      </div>
    </div>
  )
}
