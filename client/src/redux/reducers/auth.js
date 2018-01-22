import isEmpty from 'lodash.isempty'
import * as types from '../../constants/actionTypes/authActionTypes'

const initialState = {
  isAuthenticated: false,
  currentUser: {}
}
export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.AUTH_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        currentUser: action.user
      }
    default:
      return state
  }
}
