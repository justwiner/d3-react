import { SET_ROUTER } from '../constants/actionTypes'

const initialState = {
  classify:'/',
  currentRouter: '/'
}

export default function router(state = initialState, action){
  switch (action.type) {
    case SET_ROUTER :{
      if ( state.currentRouter === action.currentRouter && state.classify === action.classify ){
        return state
      }
      else{
        return {
          currentRouter: action.currentRouter,
          classify: action.classify
        }
      }
    }
    default: return state
  }
}