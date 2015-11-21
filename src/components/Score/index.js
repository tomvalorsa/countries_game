import React, { Component } from 'react'
import styles from './index.css'

export class Score extends Component {
  render() {
    // might need to implement something that changes a bit faster so it's more noticable
    let score = this.props.correct.length
    let color = d3.scale.linear()
      .domain([0, 122,244]) // will need to be 197 when countries are changed
      .range(['#FF7043', '#FFEE58', '#66BB6A'])

    return (
      <div className={styles.container} style={{'backgroundColor': color(score)}}>
        <div className={styles.textContainer}>
          <span className={styles.score}>{score}</span>
          <span className={styles.total}> / 244</span>
        </div>
      </div>
    )
  }
}