import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'
import { setGuess, resetGuess, addCorrectGuess } from 'actions/app'
import { updateRemainingCountries } from 'actions/countries'
import { capitalise } from 'util'

@connect(state => ({
  guess: state.app.guess,
  remainingCountries: state.countries.remainingCountries
}), {setGuess, addCorrectGuess, resetGuess, updateRemainingCountries})
export class Search extends Component {
  componentDidUpdate() {
    this.props.guess === '' ? this.props.resetGuess() : this.checkGuess()
  }

  handleInput() {
    this.props.setGuess(this.refs.search.value)
  }

  checkGuess() {
    let { guess, remainingCountries } = this.props

    if (guess.length > 0) {
      guess = capitalise(guess)
      if (remainingCountries.indexOf(guess) > -1) {
        this.props.addCorrectGuess(guess)
        this.props.updateRemainingCountries(guess)
        this.refs.search.value = ''
      }
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <input onKeyUp={::this.handleInput} className={styles.search} ref="search" type="text" autoFocus placeholder="Guess..." />
      </div>
    )
  }
}
