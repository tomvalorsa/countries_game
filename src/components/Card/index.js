import React, { Component } from 'react'
import styles from './index.css'

export class Card extends Component {
  render(){

    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}