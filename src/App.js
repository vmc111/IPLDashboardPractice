import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Matches from './components/TeamMatches'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={Matches} />
  </Switch>
)

export default App
