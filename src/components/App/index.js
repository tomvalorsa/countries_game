import React from 'react'
import styles from './index.css'
import classnames from 'classnames'
import { countries } from '../../data/countries.js'

export class App extends React.Component {
  state = {
    countries: countries
  }

  printCountries(){
    let countries = []
    this.state.countries.forEach((d, i) => {
      countries.push(<li key={i}>{d}</li>)
    })
    return countries
  }

  render(){

    return (
      <div className={styles.container}>
        <ul>
          {this.printCountries()}
        </ul>
      </div>
    )
  }
}

