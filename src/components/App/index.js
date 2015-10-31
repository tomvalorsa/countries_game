import React, { Component } from 'react'
import styles from './index.css'
import classnames from 'classnames'
import { countries } from '../../data/countries.js'
import { Search } from 'Search'

export class App extends Component {
  state = {
    countries: countries,
    guess: '',
    correct: []
  }

  printCountries(){
    let countries = []
    this.state.correct.forEach((d, i) => {
      countries.push(<li key={i}>{d}</li>)
    })
    return countries
  }

  setGuess(guess){
    this.setState({guess})
  }

  componentDidUpdate(){
    if (this.state.guess.length > 0) {
      let { correct, guess, countries } = this.state
      if (countries.indexOf(guess) > -1) {
        // find the right one, add it to correct array, or just capitalise the guess for now
        // will need to make a list of acceptable guesses for a country
        guess = guess.slice(0,1).toUpperCase() + guess.slice(1)
        correct.push(guess)
        this.setState({correct, guess: ''})
      }
    }
  }

  render(){
    return (
      <div className={styles.container}>
        <Search guess={this.state.guess} setGuess={::this.setGuess} />
        <ul>
          {this.printCountries()}
        </ul>
      </div>
    )
  }
}

