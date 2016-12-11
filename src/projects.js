import React from 'react'

import { menuBarLink } from './Wrapper.scss'

export default {
  hoot: ({ className }) => (
    <div className={className}>
      <h1
        style={{
          fontFamily: 'Proxima Nova W01',
          fontWeight: 300,
          textAlign: 'left',
          fontSize: '48px',
          marginBottom: '5px',
          color: 'black',
          lineHeight: '48px'
        }}>hoot</h1>
      <h2
        style={{
          fontFamily: 'Proxima Nova W01',
          fontWeight: 300,
          textAlign: 'left',
          fontSize: '36px',
          marginTop: 0,
          color: '#888',
          lineHeight: '36px'
        }}>A new way to approach college applications</h2>
      <p
        style={{
          fontFamily: 'Linotype Didot eText W01',
          fontWeight: 400,
          textAlign: 'left',
          fontSize: '18px',
          letterSpacing: '-0.05em'
        }}>I created and designed, from the ground up, a new website to help
           facilitate the college application process for aspiring high school
           seniors. The site seeks to encapsulate the entire process of applying
           to college, from the initial search to the final selection, while
           also being sleek and modern.</p>
      <div
        style={{
          display: 'inline-block',
          textAlign: 'left',
          width: '100%'
        }}>
        <a
          href="https://hoot.rocks"
          target="_blank"
          className={menuBarLink}
          style={{ fontSize: '36px' }}>Go to the site now</a>
      </div>
    </div>),
  fs: ({ className }) => (
    <div className={className}>
      <h1
        style={{
          fontFamily: 'Proxima Nova W01',
          fontWeight: 300,
          textAlign: 'left',
          fontSize: '48px',
          marginBottom: '5px',
          color: 'black',
          lineHeight: '48px'
        }}>f.s</h1>
      <h2
        style={{
          fontFamily: 'Proxima Nova W01',
          fontWeight: 300,
          textAlign: 'left',
          fontSize: '36px',
          marginTop: 0,
          color: '#888',
          lineHeight: '36px'
        }}>Building a community for artists of all types</h2>
      <p
        style={{
          fontFamily: 'Linotype Didot eText W01',
          fontWeight: 400,
          textAlign: 'left',
          fontSize: '18px',
          letterSpacing: '-0.05em'
        }}>With a small team of programmers, I am currently creating a site
           where artists of all varieties can share their works. We anticipate
           a public release some time in late 2017.</p>
    </div>),
  github: ({ className }) => (
    <div className={className}>
      <h1
        style={{
          fontFamily: 'Proxima Nova W01',
          fontWeight: 300,
          textAlign: 'left',
          fontSize: '48px',
          marginBottom: '5px',
          color: 'black',
          lineHeight: '48px'
        }}>Other Github Projects</h1>
      <h2
        style={{
          fontFamily: 'Proxima Nova W01',
          fontWeight: 300,
          textAlign: 'left',
          fontSize: '36px',
          marginTop: 0,
          color: '#888',
          lineHeight: '36px'
        }}>A variety of tools for programmers</h2>
      <p
        style={{
          fontFamily: 'Linotype Didot eText W01',
          fontWeight: 400,
          textAlign: 'left',
          fontSize: '18px',
          letterSpacing: '-0.05em'
        }}>I've contributed a number of tools to the open source community,
           including dit, a dotfile manager written in ruby, and Jolteon, a
           boilerplate for writing electron applications.</p>
      <div
        style={{
          display: 'inline-block',
          textAlign: 'left',
          width: '100%'
        }}>
        <a
          href="https://github.com/vulpino"
          target="_blank"
          className={menuBarLink}
          style={{ fontSize: '36px' }}>View my GH profile</a>
      </div>
    </div>)
}