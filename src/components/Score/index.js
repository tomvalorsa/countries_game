import React, { Component } from 'react'
import styles from './index.css'

export class Score extends Component {
  render() {
    let score = this.props.correct.length
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.score}>{score}</span>
          <span className={styles.total}> / 244</span>
        </div>
      </div>
    )
  }
}