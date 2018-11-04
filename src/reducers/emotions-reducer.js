import { SUBMIT_EMOTION } from '../actions/types'


const INITIAL_STATE = {
  emo: {},
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_EMOTION:
      return {
        ...state,
        emo: action.payload
      }
    default:
      return state;
  }
}
