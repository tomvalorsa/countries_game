import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'

export class SVG extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: 600,
      height: 400
    }
    this.update = this.update.bind(this)
  }
  componentDidMount(){
    window.addEventListener('resize', this.update)
    this.update()
  }
  componentDidUpdate(){
    this.update()
  }
  update(){
    let { width, height } = ReactDOM.findDOMNode(this).getBoundingClientRect()
    if (this.state.width !== width || this.state.height !== height) {
      this.setState({width, height})
    }
  }
  render(){
    let children = React.Children.map(this.props.children, d => React.cloneElement(d, {...this.state, ...this.props}))
    return (
      <svg className={styles.svg} width={this.state.width} height={this.state.height}>
        {children}
      </svg>
    )
  }
}