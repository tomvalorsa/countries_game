import React, { Component } from 'react'
import styles from './index.css'

export class Score extends Component {
  render() {
    let score = `${this.props.correct.length} / 244`
    return (
      <div className={styles.container}>
        {score}
      </div>
    )
  }
}