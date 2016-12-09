import React, { Component, Children, cloneElement } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import VisibilitySensor from 'react-visibility-sensor'
import RCTG from 'react-addons-css-transition-group'

import Tangram from './Tangram'
import * as actions from './actions'
import shapes from './shapes'
import bg from './bg.jpg'
import * as styles from './Wrapper.scss'

const Spacer = () => (
  <div style={{ height: '100vh' }} />
)

export class Wrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollEnabled: false,
      transitionUp: false
    }
  }

  componentDidMount () {
    const scrollDown = () => {
      this.setState({ transitionUp: false }, () => {
        this.props.goToProject(this.props.params.id ? parseInt(this.props.params.id) + 1 : 0)
      })
    }

    const scrollUp = () => {
      this.setState({ transitionUp: true }, () => {
        console.log('leaving up')
        if (this.props.params.id) this.props.goToProject(parseInt(this.props.params.id) - 1)
      })
    }

    const handleScroll = (e) => {
      if (!this.state.scrollEnabled) return
      this.setState({ scrollEnabled: false })
      setTimeout(() => { this.setState({ scrollEnabled: true }) }, 500)
      if (e.deltaY > 0) {
        scrollDown()
      } else if (e.deltaY < 0) {
        scrollUp()
      }
    }

    window.addEventListener('wheel', handleScroll)
    window.addEventListener('scrollwheel', handleScroll)
    this.setState({ scrollEnabled: true })

    // TODO handle touchmove event
  }

  render () {
    const { shape, size, children, location } = this.props
    const { transitionUp } = this.state
    return (
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
              width: '100vw',
              height: '75px',
              zIndex: '100'
            }}>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '70px',
                transform: 'translateY(-50%)'
              }}>
              <h1
                style={{
                  fontFamily: 'Proxima Nova W01',
                  fontWeight: 300,
                  textAlign: 'left',
                  fontSize: '18px'
                }}>Kyle Fahringer <i>(vulpine)</i></h1>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)'
              }}>
              {/* menu bar links */}
            </div>
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'inline-block',
              width: '35%',
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
              width: '65%',
              height: '100%',
              padding: '0 10%' }}>
            
            <div
              style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                top: 0
              }}>
              <RCTG
                transitionName={{
                  enter: transitionUp ? styles.enterUp : styles.enterDown,
                  enterActive: styles.enterActive,
                  leave: transitionUp ? styles.leaveUp : styles.leaveDown,
                  leaveActive: styles.leaveActive
                }}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                component='div'
                className={styles.rctg}>
                {Children.map(children, c => cloneElement(c, {
                  key: `mainContent${location.pathname}`,
                  className: styles.child }))}
              </RCTG>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    shape: state.shape,
    size: state.size
  }
}

function mapDispatchToProps (dispatch) {
  return {
    goToProject: _ => dispatch(actions.goToProject(_))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
