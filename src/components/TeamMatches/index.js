import {Component} from 'react'
import './index.css'

export default class Matches extends Component {
  state = {matchesObject: {}, fetchingDetails: true}

  componentDidMount() {
    this.getteamMatches()
  }

  getteamMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/:id')
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <h1>Hii Friends</h1>
  }
}
