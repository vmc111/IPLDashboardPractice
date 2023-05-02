// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

export default class Home extends Component {
  state = {isLoading: true, teams: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    // console.log('Method Called')
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formatedData = data.teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))
    // console.log(data)
    this.setState({isLoading: false, teams: formatedData})
  }

  render() {
    const {isLoading, teams} = this.state

    const body = (
      <div className="bg-main">
        <div className="header">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="team-cards">
          {teams.map(eachTeam => (
            <TeamCard item={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )

    const loader = (
      <div className="loader-container" data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} />
      </div>
    )
    const toRender = isLoading ? loader : body
    return toRender
  }
}
