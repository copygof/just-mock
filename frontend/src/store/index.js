import logger from 'redux-logger'
import { createContext, useContext, useReducer } from 'react'
import reducer from '../BL'

const initialState = reducer()

const Dispatch = createContext(initialState)
const Store = createContext(initialState)

const createStore = () => useReducer(reducer, initialState)
const getStore = () => ({
  dispatch: useContext(Dispatch),
  state: useContext(Store),
})

export {
  Dispatch,
  Store,
  createStore,
  getStore,
}