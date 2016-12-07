import shapes from './shapes'
import actions from './actionTypes'

export const toSquare = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.SQUARE }
}

export const toLogo = () => {
  return { type: actions.shape.SET_SHAPE, payload: shapes.LOGO }
}
