import { ACTION_TYPE } from '../action-types'

export const setCurrentUser = user => ({
  type: ACTION_TYPE.SET_CURRENT_USER,
  payload: user
})