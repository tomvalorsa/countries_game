import React, { Component } from 'react'
import styles from './index.css'

export class Timer extends Component {
  render(){
    return (
      <div className={styles.container}>
        <span className={styles.time}>1:00:56</span>
      </div>
    )
  }
}