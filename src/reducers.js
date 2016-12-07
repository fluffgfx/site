import shapes from './shapes'
import actions from './actionTypes'

export function shape (state = shapes.LOGO, { type, payload }) {
  console.log(type, payload)
  switch (type) {
    case actions.shape.SET_SHAPE: return payload
    default: return state
  }
}
