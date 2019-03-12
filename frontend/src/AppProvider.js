import React from 'react'
import logger from 'redux-logger'
import { compose } from 'redux'
import {
  Dispatch,
  Store,
  createStore
} from './store'
import App from './App'

function AppProvider() {
  const [state, dispatch] = createStore()
  
  const dispatchWithLog = action => logger({ getState: () => state })(dispatch)(action)

  return (
    <Dispatch.Provider value={dispatchWithLog}>
      <Store.Provider value={state}>
        <App />
      </Store.Provider >
    </Dispatch.Provider>
  )
}

export default AppProvider
