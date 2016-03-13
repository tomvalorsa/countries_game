import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'

@connect(state => ({correct: state.app.correct}))
export class CorrectGuessList extends Component {
  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.correct.length !== nextProps.correct.length)
      console.log('m8')
  }
  render() {
    console.log(this.props.correct)
    return (
      <div className={styles.container}>
        {this.props.correct.map(d => {
          return <li key={d} className={styles.correct}>{d}</li>
        })}
      </div>
    )
  }
}