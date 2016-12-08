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

export const sizeTo250 = () => {
  return { type: actions.size.SET_SIZE, payload: 250 }
}

export const sizeTo500 = () => {
  return { type: actions.size.SET_SIZE, payload: 500 }
}

export const sizeTo1000 = () => {
  return { type: actions.size.SET_SIZE, payload: 1000 }
}
