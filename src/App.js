import React from 'react'
import './styles/index.scss'
import { Auth } from './pages'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </div>
    )
  }
}

export default App
