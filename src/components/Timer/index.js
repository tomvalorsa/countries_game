import React, { Component } from 'react'
import styles from './index.css'

export class Timer extends Component {
  componentDidMount(){
    let start = new Date().getTime()
    let time = 0
    let elapsed = '0.0'

    let instance = () => {
      time += 100
      elapsed = Math.floor(time / 100) / 10

      if (Math.round(elapsed) == elapsed) {
        elapsed += '.0'
      }

      React.findDOMNode(this.refs.time).innerText = elapsed

      let diff = (new Date().getTime() - start) - time
      window.setTimeout(instance, (100 - diff)) // Set interval to remove inaccuracy
    }

    window.setTimeout(instance, 100) // Set interval for counter
  }
  render(){
    return (
      <div className={styles.container}>
        <span className={styles.time} ref='time'></span>
      </div>
    )
  }
}