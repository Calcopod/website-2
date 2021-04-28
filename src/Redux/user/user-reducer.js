import { ACTION_TYPE } from '../action-types'

const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case ACTION_TYPE.SET_CURRENT_USER:
      return ({
        ...state,
        currentUser: action.payload
      })
  
    default:
      return state
  }
}

export default userReducer