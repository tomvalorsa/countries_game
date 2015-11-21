import React, { Component } from 'react'
import styles from './index.css'
import d3 from 'd3'

export class WorldMap extends Component {
  hover(name){
    console.log(name)
  }
  click(name){
    console.log(name)
  }
  render(){
    let { feature, width, height, correct } = this.props
    let projection = d3.geo.mercator()
      .scale(1)
      .translate([0,0])
    let path = d3.geo.path()
      .projection(projection)

    let b = path.bounds(feature)
    let dx = b[1][0] - b[0][0]
    let dy = b[1][1] - b[0][1]
    let s = 0.95 / Math.max(
      (dx) / width,
      (dy) / height
    )
    let t = [
      (width - s * (b[1][0] + b[0][0]))/2,
      (height - s * (b[1][1] + b[0][1]))/2
    ]
    projection.scale(s)
      .translate(t)


      let polygons = feature.features

    let countries = []
    for (let i = 0; i < polygons.length; i++) {
      let name = polygons[i].properties.name
      countries.push(<path
        key={`${i}-name`}
        onClick={this.click.bind(this, name)}
        onMouseOver={this.hover.bind(this, name)}
        d={path(polygons[i])}
        stroke="#606060"
        fill={correct.indexOf(name) > -1 ? 'red' : '#eee'}/>)
    }

    return <g>{countries}</g>
  }
}