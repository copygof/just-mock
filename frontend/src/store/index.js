import logger from 'redux-logger'
import { createContext, useContext, useReducer } from 'react'
import reducer from '../BL'

const initialState = reducer()

const Dispatch = createContext(initialState)
const Store = createContext(initialState)
// logger
// ({ getState }) => next => (action) => {
const createStore = () => useReducer(reducer, initialState)
const getStore = () => ({
  dispatch: useContext(Dispatch),
  // dispatch: (action) => logger({ getState() {} })(useContext(Dispatch))(action),
  state: useContext(Store),
})

export {
  Dispatch,
  Store,
  createStore,
  getStore,
}