import shapes from './shapes'
import actions from './actionTypes'

export function shape (state = shapes.LOGO, { type, payload }) {
  switch (type) {
    case actions.shape.SET_SHAPE: return payload
    default: return state
  }
}

export function size (state = 500, { type, payload }) {
  switch (type) {
    case actions.size.SET_SIZE: return payload
    default: return state
  }
}
