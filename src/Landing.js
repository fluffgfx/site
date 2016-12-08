import React from 'react'
import { connect } from 'react-redux'

import Tangram from './Tangram'
import * as actions from './actions'

export const Landing = ({ shape, size, toSquare, toLogo, toRectangle, toCat, sizeTo250, sizeTo500, sizeTo1000 }) => (
  <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Tangram size={size} shape={shape} />
      <h1 style={{ fontFamily: 'proxima-nova', fontWeight: 200, textAlign: 'center' }}>Kyle Fahringer (<i>vulpine</i>)</h1>
      <a href='#' onClick={toSquare}>to square</a><br />
      <a href='#' onClick={toLogo}>to logo</a><br />
      <a href='#' onClick={toRectangle}>to rectangle</a><br />
      <a href='#' onClick={toCat}>to Cat</a><br />
      <a href='#' onClick={sizeTo250}>smaller</a><br />
      <a href='#' onClick={sizeTo500}>medium</a><br />
      <a href='#' onClick={sizeTo1000}>bigger</a>
    </div>
  </div>
)

function mapStateToProps (state) {
  return {
    shape: state.shape,
    size: state.size
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toSquare: _ => dispatch(actions.toSquare()),
    toLogo: _ => dispatch(actions.toLogo()),
    toRectangle: _ => dispatch(actions.toRectangle()),
    toCat: _ => dispatch(actions.toCat()),
    sizeTo250: _ => dispatch(actions.sizeTo250()),
    sizeTo500: _ => dispatch(actions.sizeTo500()),
    sizeTo1000: _ => dispatch(actions.sizeTo1000())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
