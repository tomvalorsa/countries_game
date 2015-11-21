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
import { Sidebar } from 'Sidebar'

export class App extends Component {
  state = {
    countries: this.props.countries,
    guess: '',
    correct: []
  }

  printCountries(){
    let countries = []
    this.state.correct.forEach((d, i) => {
      countries.push(<li key={i} className={styles.correct}>{d}</li>)
    })
    return countries
  }

  setGuess(guess){
    this.setState({guess})
  }

  handleCorrectGuess(correct, guess){
    guess = capitalise(guess)
    correct.push(guess)
    this.setState({correct, guess: ''})
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    if (this.state.guess.length > 0) {
      let { correct, guess, countries } = this.state
      if (countries.indexOf(guess) > -1) {
        // find the right one, add it to correct array, or just capitalise the guess for now
        // will need to make a list of acceptable guesses for a country
        this.handleCorrectGuess(correct, guess)
      }
    }
  }

  render(){
    return (
      <div className={styles.container}>
        <div className={styles.sidebarContainer}>
          <Sidebar>
            <Search guess={this.state.guess} setGuess={::this.setGuess} />
            <ul style={{marginTop:'20px'}}>
              {this.printCountries()}
            </ul>
          </Sidebar>
        </div>
        <div className={styles.topRight}>
          <Card>
            <Score correct={this.state.correct} />
            <Timer />
          </Card>
        </div>
        <div className={styles.map}>
          <SVG>
            <WorldMap correct={this.state.correct} feature={this.props.feature} />
          </SVG>
        </div>
      </div>
    )
  }
}

