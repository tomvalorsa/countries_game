import React, { Component } from 'react'
import styles from './index.css'
import classnames from 'classnames'
import { capitalise } from 'util'
import { connect } from 'react-redux'
import { loadCountries } from 'actions/countries'
import { Search } from 'Search'
import { SVG } from 'SVG'
import { WorldMap } from 'WorldMap'
import { Timer } from 'Timer'
import { ProgressBar } from 'ProgressBar'
import { CorrectGuessList } from 'CorrectGuessList'

@connect(state => ({
  countries: state.countries.data
}), {loadCountries})
export class App extends Component {
  componentDidMount() {
    this.props.loadCountries()
    this.setDynamicHeight()
  }

  componentDidUpdate() {
    this.setDynamicHeight()
  }

  setDynamicHeight() {
    let { timer, search, correctGuesses, progressBar } = this.refs
    let searchHeight = search.getBoundingClientRect().height
    let timerHeight = timer.getBoundingClientRect().height
    let progressBarHeight = progressBar.getBoundingClientRect().height
    let correctGuessesHeight = `calc(100vh - ${searchHeight}px - ${timerHeight}px - ${progressBarHeight}px);`
    correctGuesses.setAttribute('style', `height: ${correctGuessesHeight}`)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sidebarContainer}>
          <div ref="timer" className={styles.timerContainer}>
            <Timer />
          </div>
          <div ref="search" className={styles.searchContainer}>
            <Search />
          </div>
          <div ref="correctGuesses" className={styles.correctGuesses}>
            <CorrectGuessList />
          </div>
        </div>
        <div className={styles.mapContainer}>
          <SVG>
            <WorldMap />
          </SVG>
        </div>
        <div ref="progressBar" className={styles.progressBarContainer}>
          <ProgressBar />
        </div>
      </div>
    )
  }
}

