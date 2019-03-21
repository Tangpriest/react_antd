import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Router, Route } from 'react-router-dom' 
import history from './history'
import { GlobalProvider, GlobalContext } from './store'

function App() {
  const store = React.useContext(GlobalContext)
  return (
    <Router history={history}>
      <h1>{store.collapsed ? 'React' : 'Native' }</h1>
    </Router>
  )
}

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
  , document.getElementById('root'))

serviceWorker.unregister()
