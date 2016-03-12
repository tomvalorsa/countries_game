import React, { Component } from 'react'
import styles from './index.css'

export class Search extends Component {
  handleInput(){
    let input = this.refs.search
    let guess = input.value
    this.props.setGuess(guess)
  }

  componentDidUpdate(){
    if (this.props.guess === '') {
      let input = this.refs.search
      input.value = ''
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <input onKeyUp={::this.handleInput} className={styles.search} ref='search' type='text' autoFocus placeholder='Search...' />
      </div>
    )
  }
}