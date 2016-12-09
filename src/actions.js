import { push } from 'react-router-redux'

import shapes from './shapes'
import actions from './actionTypes'

export const toSquare = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.SQUARE }
}

export const toLogo = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.LOGO }
}

export const toRectangle = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.RECTANGLE }
}

export const toCat = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.CAT }  
}

export const toTiger = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.TIGER }
}

export const toBoat = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.BOAT }
}

export const goToProject = (n) => {
  return push(`/project/${n}`)
}
