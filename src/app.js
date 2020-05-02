import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'
import Game from './components/Game'



class App extends React.Component {
  constructor(){
    super()

    this.state = {
    }
  }

  componentDidMount() {

  }



  render() {
    return (

      <Router>
        <main>

          <Switch>
            <Route path="/" component={Game} />

          </Switch>

        </main>

      </Router>


    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
