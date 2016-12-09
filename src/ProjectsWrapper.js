import React, { cloneElement } from 'react'
import { push } from 'react-router-redux'

import projects from './projects'

export default ({ params, className }) => {
  const { id } = params
  const P = projects[parseInt(id)]
  return <P className={className} />
}
