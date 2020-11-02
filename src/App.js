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
        {/* <Auth /> */}
        <Route exact path='/ms' component={HomeContainer} />
        {/* <div>{fetch("https://api.chucknorris.io/jokes/random").then(r =>  r.json().then(data => ({status: r.status, data: data}))).then(data => console.log(data.data.value))}</div> */}
      </div>
    )
  }
}

export default App
