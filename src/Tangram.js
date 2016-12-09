import React, { Component } from 'react'

import shapeTypes from './shapes'

// logo as represented as separate shapes
// don't ask why it's a bunch of arrays
const logostrings = [
  ["M",0,",",0," l",250,",",250," h",-500," L",0,",",0," z"],
  ["M",0,",",0," l",353.6,",",353.6," V",0," H",0," z"],
  ["M",0,",",0," l",125,",",125," l",125,-123.6," l",-125,-126.4," L",0,",",0," z"],
  ["M",0,",",0," V",-251.4," l",-125,",",125," L",0,",",0," z"],
  ["M",0,",",0," v",251.4," l",125,-125," L",0,",",0," z"],
  ["M",0,",",0," l",175.8,-175.8," l",-352.6,-1," L",0,",",0," z"],
  ["M",0,",",0," l",125,",",125," v",-250," l",-125,-125," V",0," z"]
]

const shapes = {
  [shapeTypes.LOGO]: [
    [374.5, 385.7, 0], // big triangle 1
    [374.5, 635.7, 0], // big triangle 2
    [728.1, 687.5, 0], // square
    [978.1, 688.9, 0], // small triangle 1
    [728.1, 436.1, 0], // small triangle 2
    [198.7, 561.5, 0], // medium triangle
    [249.5, 260.7, 0], // paralellogram
    [15, 15, 0]
  ],
  [shapeTypes.SQUARE]: [
    [-250, -250, 180],
    [0, 0, 45],
    [250, 250, 0],
    [500, 251, 0],
    [-375.5, 124, 270],
    [0, 707, 315],
    [375, -125, 90],
    [275, 250, 0]
  ],
  [shapeTypes.RECTANGLE]: [
    [498, -1, 45],
    [-352, -705, 180],
    [0, 0, 45],
    [-125, -125, 135],
    [-250, -250, 225],
    [-175, -175, 180],
    [0, -250, 135, true],
    [350, 125, 0]
  ],
  [shapeTypes.CAT]: [
    [250, -500, 90],
    [251, -500, 90],
    [0, 0, 0],
    [250, 0, 0],
    [0, -252, 0],
    [175, -75, 90],
    [480, -625, 90],
    [80, 305, 0]
  ]
}

export default class Logo extends Component {
  constructor (props) {
    super (props)
    console.log(this.props)
    this.state = {
      shape: this.props.rotate ? this.props.shapes[0] : this.props.shape,
      currentIndex: 0
    }
  }

  componentDidMount () {
    if (this.props.rotate) {
      const rotator = () => {
        setTimeout(() => {
          this.setState({
            shape: this.props.shapes[this.state.currentIndex + 1] || this.props.shapes[0],
            currentIndex: this.props.shapes[this.state.currentIndex + 1] ? this.state.currentIndex + 1 : 0
          })
          rotator()
        }, this.props.rotate)
      }
      rotator()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.rotate && nextProps.shape !== this.state.shape) {
      this.setState({
        shape: nextProps.shape
      })
    }
  }

  render () {
    const { size, background, ...props } = this.props
    const { shape } = this.state
    const landscape = window.innerWidth > window.innerHeight
    const id = 'TangramMaskPath'
    if (!shape) return null
    return (
      <svg
        style={{
          overflow: 'visible',
          width: size + 'px',
          height: size * 1.03 + 'px',
          transition: 'width 0.25s ease-in-out, height 0.25s ease-in-out' }} {...props}>
        <defs>
          <mask
            id={id}
            >
            <g
              style={{
                transform: '' +
                  `scale(${(size - 40)/(landscape ? window.innerHeight : window.innerWidth)}) ` +
                  `translate(${shapes[shape][7][0]}px, ${shapes[shape][7][1]}px) ` +
                  `rotate(${shapes[shape][7][2]}deg)`,
                transition: 'transform 0.25s ease-in-out'
                }}>
              {logostrings.map((l, i) => (
                <g
                  key={`logoShape${i}`} 
                  style={{
                    transform: '' +
                    `rotate(${shapes[shape][i][2]}deg)` +
                    `translate(${shapes[shape][i][0]}px, ${shapes[shape][i][1]}px)` +
                    (shapes[shape][i][3] ? 'scale(-1, 1)' : 'scale(1, 1)'),
                    transition: `transform 0.5s ease-in-out ${i * 0.125}s`
                  }}>
                  <path d={l.join('')} style={{ stroke: 'black', strokeWidth: '2px' }} fill='white'/>
                </g>
              ))}
            </g>
          </mask>
        </defs>
        <foreignObject x="-500" y="-50" mask={`url(#${id})`} width={size + 1000 + 'px'} height={size * 1.03 + 100 + 'px'} style={{ overflow: 'hidden' }}>
          <img src={background} width={size + 1000 + 'px'} height={size * 1.03 + 100 + 'px'} style={{ display: 'block', width: '100%', height: 'auto' }}/>
        </foreignObject>
      </svg>
    )
  }
}
