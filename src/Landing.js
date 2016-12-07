import React from 'react'
import { connect } from 'react-redux'

import Tangram from './Tangram'
import * as actions from './actions'

export const Landing = ({ shape, toSquare, toLogo }) => (
  <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Tangram size={500} shape={shape} />
      <h1 style={{ fontFamily: 'proxima-nova', fontWeight: 200, textAlign: 'center' }}>Kyle Fahringer (<i>vulpine</i>)</h1>
      <a href='#' onClick={toSquare}>to square</a>
      <a href='#' onClick={toLogo}>to logo</a>
    </div>
  </div>
)

function mapStateToProps (state) {
  return {
    shape: state.shape
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toSquare: _ => dispatch(actions.toSquare()),
    toLogo: _ => dispatch(actions.toLogo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
