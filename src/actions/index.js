import * as types from '../constants/actionTypes'

export const setRouter = (currentRouter, classify) => ({type: types.SET_ROUTER,currentRouter, classify})