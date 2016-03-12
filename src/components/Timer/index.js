import React, { Component } from 'react'
import styles from './index.css'

export class Timer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.circle}>
          <div ref="time" className={styles.time}>15:00:00</div>
        </div>
      </div>
    )
  }
}