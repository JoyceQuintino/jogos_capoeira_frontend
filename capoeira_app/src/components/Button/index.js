import React from 'react';
import styles from './Button.module.css';

function Button({ children }) {
  return (
    <div className={styles.divButton}>
      <button className={styles.buttonComponent}>
        {children}
      </button>
    </div>
  );
}

export default Button;