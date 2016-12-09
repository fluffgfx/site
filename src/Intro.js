import React from 'react'

export default ({ className }) => (
  <div className={className}>
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
)