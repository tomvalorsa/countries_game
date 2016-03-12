import React, { Component } from 'react'
import styles from './index.css'

export class ProgressBar extends Component {
  render() {
    let score = this.props.correct.length
    return (
      <div className={styles.container}>
        <div className={styles.score}>{score} / 244</div>
      </div>
    )
  }
}