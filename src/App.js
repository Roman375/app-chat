import React from 'react'
import './styles/index.scss'
import { Auth } from './pages'
import { Route } from 'react-router-dom'
import { Home } from 'pages'
import { Pages } from './test/Pages'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Auth /> */}
        {/* <Route exact path='/ms' component={Home} /> */}
        <Pages />
      </div>
    )
  }
}

export default App
