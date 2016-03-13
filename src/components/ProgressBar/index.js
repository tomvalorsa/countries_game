import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'

@connect(state => ({correct: state.app.correct}))
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