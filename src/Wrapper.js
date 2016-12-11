import React, { Component, Children, cloneElement } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import VisibilitySensor from 'react-visibility-sensor'
import RCTG from 'react-addons-css-transition-group'
import Hammer, { Manager, Swipe } from 'hammerjs'

import Tangram from './Tangram'
import * as actions from './actions'
import shapes from './shapes'
import bg from './bg.jpg'
import * as styles from './Wrapper.scss'
import mobileCheck from './mobileCheck'
import projects from './projects'

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
        this.props.goToProject(this.props.params.id
          ? Object.keys(projects)[Object.keys(projects).indexOf(this.props.params.id) + 1] || Object.keys(projects)[0]
          : Object.keys(projects)[0])
      })
    }

    const scrollUp = () => {
      this.setState({ transitionUp: true }, () => {
        if (this.props.params.id) this.props.goToProject(
          Object.keys(projects)[Object.keys(projects).indexOf(this.props.params.id) - 1] ||
          Object.keys(projects)[Object.keys(projects).length - 1])
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

    if (!mobileCheck()) {
      window.addEventListener('wheel', handleScroll)
      window.addEventListener('scrollwheel', handleScroll)
    } else {
      // we're on mobile, use hammerjs
      const hm = new Manager(document.getElementById('mount'))
      hm.add(new Swipe({ event: 'swipeup', direction: Hammer.DIRECTION_UP }))
      hm.add(new Swipe({ event: 'swipedown', direction: Hammer.DIRECTION_DOWN }))
      hm.on('swipeup', e => { console.log('swipeup'); scrollDown() })
      hm.on('swipedown', e => { console.log('swipedown'); scrollUp() })
    }
    
    this.setState({ scrollEnabled: true })
    window.addEventListener('resize', () => { this.forceUpdate() })
  }

  render () {
    const { shape, size, children, location } = this.props
    const { transitionUp } = this.state
    const mobile = mobileCheck() || window.innerWidth < window.innerHeight
    const tangramSize = window.innerWidth < 1000 ? window.innerWidth / 2 : 500
    console.log(tangramSize)
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
              <Link to='/' className={styles.menuBarLink}>
                <h1
                  style={{
                    fontFamily: 'Proxima Nova W01',
                    fontWeight: 300,
                    textAlign: 'left',
                    fontSize: mobile ? '36px' : '24px'
                  }}>Kyle Fahringer <i>(vulpine)</i></h1>
              </Link>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)'
              }}>
              <a href="mailto:kyle@vulpine.me" className={styles.menuBarLink}>
                Contact Me
              </a>
            </div>
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'inline-block',
              width: mobile ? '100%' : '35%',
              maxWidth: mobile ? null : '550px',
              height: mobile ? `${tangramSize * 2}px` : '100%'
            }}>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: mobile ? 'translate(-50%, -50%)' : 'translate(-25%, -50%)'
              }}>
              <Tangram
                size={tangramSize}
                shape={shape}
                background={bg} />
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: mobile ? `${tangramSize}px` : 0,
              right: 0,
              display: 'inline-block',
              width: mobile ? '100%' : '65%',
              height: mobile ? `calc(100% - ${tangramSize}px)` : '100%',
              padding: mobile ? '10%' : '0 10%' }}>
            <div
              style={{
                position: 'relative',
                height: mobile ? '100%' : '100vh',
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
