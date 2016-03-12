import React, { Component } from 'react'
import styles from './index.css'
import classnames from 'classnames'
import { capitalise } from 'util'

import { Search } from 'Search'
import { SVG } from 'SVG'
import { WorldMap } from 'WorldMap'
import { Score } from 'Score'
import { Card } from 'Card'
import { Timer } from 'Timer'

export class App extends Component {
  state = {
    countries: this.props.countries,
    guess: '',
    correct: []
  }

  componentDidMount() {
    this.setDynamicHeight()
  }

  componentDidUpdate() {
    this.setDynamicHeight()
    if (this.state.guess.length > 0) {
      let { correct, guess, countries } = this.state
      if (countries.indexOf(guess) > -1) {
        // find the right one, add it to correct array, or just capitalise the guess for now
        // will need to make a list of acceptable guesses for a country
        this.handleCorrectGuess(correct, guess)
      }
    }
  }

  setDynamicHeight() {
    let { timer, search, correctGuesses } = this.refs
    let searchHeight = search.getBoundingClientRect().height
    let timerHeight = timer.getBoundingClientRect().height
    let correctGuessesHeight = `calc(100vh - ${searchHeight}px - ${timerHeight}px);`
    correctGuesses.setAttribute('style', `height: ${correctGuessesHeight}`)
  }

  printCountries() {
    let countries = []
    this.state.correct.forEach((d, i) => {
      countries.push(<li key={i} className={styles.correct}>{d}</li>)
    })
    return countries
  }

  setGuess(guess) {
    this.setState({guess})
  }

  handleCorrectGuess(correct, guess){
    guess = capitalise(guess)
    correct.push(guess)
    this.setState({correct, guess: ''})
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sidebarContainer}>
          <div ref="timer" className={styles.timerContainer}>
            <Timer />
          </div>
          <div ref="search" className={styles.searchContainer}>
            <Search setGuess={::this.setGuess} guess={this.state.guess} />
          </div>
          <div ref="correctGuesses" className={styles.correctGuesses}>
            {this.printCountries()}
          </div>
        </div>
        <div className={styles.mapContainer}>
          <SVG>
            <WorldMap correct={this.state.correct} feature={this.props.feature} />
          </SVG>
        </div>
      </div>
    )
  }
}

