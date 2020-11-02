import React from 'react'
import './styles/index.scss'
import { Auth } from './pages'
import { Route } from 'react-router-dom'
import { Home } from 'pages'
import HomeContainer from './HomeContainer'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path='/' component={HomeContainer} />
      </div>
    )
  }
}

export default App
