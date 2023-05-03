import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'

export default class Matches extends Component {
  state = {matchesObject: {}, fetchingDetails: true, backgroundColor: 'white'}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },

      recentMatches: data.recent_matches.map(eachObject => ({
        competingTeam: eachObject.competing_team,
        competingTeamLogo: eachObject.competing_team_logo,
        date: eachObject.date,
        firstInnings: eachObject.first_innings,
        id: eachObject.id,
        manOfTheMatch: eachObject.man_of_the_match,
        matchStatus: eachObject.match_status,
        result: eachObject.result,
        secondInnings: eachObject.second_innings,
        umpires: eachObject.umpires,
        venue: eachObject.venue,
      })),
    }

    let background

    switch (id) {
      case 'SH':
        background = 'red-background'
        break
      case 'DC':
        background = 'navyBlue-red'
        break
      case 'RCB':
        background = 'red-gold'
        break
      case 'KKR':
        background = 'purple-gold'
        break
      case 'MI':
        background = 'blue-orange'
        break
      case 'CSK':
        background = 'blue-yellow'
        break
      case 'RR':
        background = 'blue-gold'
        break
      case 'KXP':
        background = 'red-lightGray'
        break

      default:
        background = 'white'
    }

    this.setState({
      matchesObject: formattedData,
      fetchingDetails: false,
      backgroundColor: background,
    })
  }

  render() {
    const {matchesObject, fetchingDetails, backgroundColor} = this.state
    const loader = (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
    const body = (
      <>
        <img
          src={matchesObject.teamBannerUrl}
          alt="team banner"
          className="banner-img"
        />
        <h3>Latest Match</h3>
        <LatestMatch latestMatch={matchesObject.latestMatchDetails} />
      </>
    )
    return (
      <div className={`bg-matches ${backgroundColor}`}>
        {fetchingDetails ? loader : body}
      </div>
    )
  }
}
