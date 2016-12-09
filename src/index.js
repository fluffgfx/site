import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

// production google analytics tracking
import ReactGA from 'react-ga'
const production = process.env.NODE_ENV === 'production'
let onUpdate = () => {}
if (production) {
  ReactGA.initialize(process.env.GA_TRACKING_ID)
  onUpdate = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}

// typekit
// (function(d) {
//   var config = {
//     kitId: 'pzk2lcn',
//     scriptTimeout: 3000,
//     async: true
//   },
//   h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
// })(document);

// friendship ended with typekit
// now i am friends with fonts.com
// mainly cause i really wanted didot
// 
// font-family:'Linotype Didot eText W01'; 400, 700
// font-family:'Proxima Nova W01'; 200, 300


import * as reducers from './reducers'

// redux store
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory)),
    window.devToolsExtension && !production ? window.devToolsExtension() : f => f
  )
)

window.store = store

const history = syncHistoryWithStore(browserHistory, store)

import Wrapper from './Wrapper'
import Intro from './Intro'
import ProjectsWrapper from './ProjectsWrapper'
import { toLogo, toBoat, toCat, toTiger } from './actions'
import projects from './projects'
require('./globals.scss')

render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Wrapper}>
        <IndexRoute onEnter={_ => { store.dispatch(toLogo()) }} component={Intro} />
        <Route path='project/:id' onEnter={(nextState, replace) => {
          const { id } = nextState.params
          if (id < 0) { replace(`/project/${projects.length - 1}`) }
          if (id >= projects.length) { replace(`/project/0`) }
          switch (parseInt(id)) {
            case 0: store.dispatch(toCat()); break;
            case 1: store.dispatch(toTiger()); break;
            case 2: store.dispatch(toBoat()); break;
          }
        }} component={ProjectsWrapper} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('mount'))
