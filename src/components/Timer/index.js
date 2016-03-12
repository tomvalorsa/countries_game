import React, { Component } from 'react'
import styles from './index.css'
import moment from 'moment'

export class Timer extends Component {
  componentDidMount() {
    // this.setCountdown()
  }

  setCountdown() {
    let time = 1
    let duration = moment.duration(15, 'minutes')
    let interval = 1000

    let countdown = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds')
      this.refs.time.innerHTML = moment(duration.asMilliseconds()).format('mm:ss')
      if (this.refs.time.innerHTML === '00:00') clearInterval(countdown)
    }, interval)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.circle}>
          <div ref="time" className={styles.time}>15:00</div>
        </div>
      </div>
    )
  }
}