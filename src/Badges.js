import React from 'react'

import badgePS from './badgePS.png'
import badgePR from './badgePR.png'

export default () => (
  <div style={{ textAlign: 'left' }}>
    <div style={{ display: 'inline-block', textAlign: 'left', width: '100%' }}>
      <a style={{ display: 'inline-block', marginLeft: '-12px' }} target="_blank" href="https://www.youracclaim.com/badges/fcbdddfc-bbd8-4e49-989e-65ab97b59620/public_url">
        <img style={{ width: '100px', height: 'auto', filter: 'grayscale(100%)' }} src={badgePS} />
      </a>
      <a style={{ display: 'inline-block' }} target="_blank" href="https://www.youracclaim.com/badges/02deaa49-a867-4ca2-8445-dd5275c8adca/public_url">
        <img style={{ width: '100px', height: 'auto', filter: 'grayscale(100%)' }} src={badgePR} />
      </a>
    </div>
  </div>
)