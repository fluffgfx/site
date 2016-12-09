import React from 'react'
import { connect } from 'react-redux'
import VisibilitySensor from 'react-visibility-sensor'

import Tangram from './Tangram'
import * as actions from './actions'
import shapes from './shapes'
import bg from './bg.jpg'

const Spacer = () => (
  <div style={{ height: '100vh' }} />
)

export const Landing = ({ shape, size, toSquare, toLogo, toRectangle, toCat, sizeTo250, sizeTo500, sizeTo1000 }) => (
  <div
    style={{
      position: 'relative',
      height: '100vh',
      width: '100vw',
      textAlign: 'center'
    }}>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'inline-block',
        width: '40%',
        height: '100%'
      }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-25%, -50%)'
        }}>
        <Tangram
          size={size}
          shape={shape}
          background={bg} />
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'inline-block',
        width: '60%',
        height: '200%',
        padding: '0 10%' }}>
      
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          top: '-50px'
        }}>
        <VisibilitySensor onChange={v => { if (v) toLogo() }}>
          <div
            style={{
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)'
            }}>
            <h1
              style={{
                fontFamily: 'Proxima Nova W01',
                fontWeight: 300,
                textAlign: 'left',
                fontSize: '72px'
              }}>Kyle Fahringer <i>(vulpine)</i></h1>
            <p
              style={{
                fontFamily: 'Linotype Didot eText W01',
                fontWeight: 400,
                textAlign: 'left',
                fontSize: '24px',
                letterSpacing: '-0.05em'
              }}>I'm a programmer and web designer based out of South Florida.</p>
          </div>
        </VisibilitySensor>
      </div>
      <div style={{ height: '50vh' }} />
      <VisibilitySensor onChange={v => { if (v) toSquare() }}>
        <div
          style={{
            position: 'relative'
          }}>
          <h1
            style={{
              fontFamily: 'Proxima Nova W01',
              fontWeight: 300,
              textAlign: 'left',
              fontSize: '72px'
            }}>Second Section</h1>
          <p
            style={{
              fontFamily: 'Linotype Didot eText W01',
              fontWeight: 400,
              textAlign: 'left',
              fontSize: '24px',
              letterSpacing: '-0.05em'
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consectetur odio imperdiet sapien eleifend laoreet. Curabitur facilisis
            nunc ac arcu tempus tincidunt. Etiam vel porta erat. Quisque aliquam
            purus sit amet tellus blandit tristique. Praesent sit amet nisi at
            neque vehicula eleifend et a mi. Nam cursus nisl et magna tincidunt
            vulputate. Maecenas facilisis lectus venenatis, facilisis tellus ac,
            rutrum ex. Etiam convallis in metus congue ullamcorper. Ut eleifend
            ornare ligula. Etiam fermentum odio quis nisi aliquam bibendum.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
            et justo porttitor, varius nisl sit amet, euismod ante. In rhoncus,
            purus tristique pulvinar porta, est sem facilisis nisl, id placerat
            elit quam at sapien. Suspendisse eu velit a est gravida suscipit.</p>
        </div>
      </VisibilitySensor>
      <Spacer />
      <VisibilitySensor onChange={v => { if (v) toCat() }}>
        <div
          style={{
            position: 'relative'
          }}>
          <h1
            style={{
              fontFamily: 'Proxima Nova W01',
              fontWeight: 300,
              textAlign: 'left',
              fontSize: '72px'
            }}>Third Section</h1>
          <p
            style={{
              fontFamily: 'Linotype Didot eText W01',
              fontWeight: 400,
              textAlign: 'left',
              fontSize: '24px',
              letterSpacing: '-0.05em'
            }}>Donec finibus, sem vitae facilisis elementum, magna mauris auctor
            eros, a facilisis magna sapien a neque. Nunc eu ipsum ex. In et
            lacus in justo ultricies interdum. Nulla suscipit lectus nec nibh
            ultricies imperdiet nec in lacus. Maecenas vel congue nunc,
            fermentum varius ipsum. Donec rhoncus neque felis, ac semper est
            eleifend sed. Cras tempor arcu nibh, in ultrices lectus scelerisque
            quis. Sed leo nulla, aliquam at maximus vitae, fermentum sit amet
            nunc. Sed elit tortor, bibendum at gravida vel, aliquet ac metus.</p>
        </div>
      </VisibilitySensor>
      <Spacer />
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
