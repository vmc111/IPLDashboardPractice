import './index.css'

const LatestMatch = props => {
  const latestMatch = props
  const details = latestMatch.latestMatch
  console.log(details)

  return (
    <div className="main-card">
      <div className="main-card-2">
        <div className="details">
          <h4>{details.competingTeam}</h4>
          <h5>{details.date}</h5>
          <h6>{details.venue}</h6>
          <h6>{details.result}</h6>
        </div>
        <img
          src={details.competingTeamLogo}
          alt={details.id}
          className="oponent-logo"
        />
      </div>
      <div className="match-stats">
        <h4>First Innings</h4>
        <h6>{details.firstInnings}</h6>
        <h4>Second Innings</h4>
        <h6>{details.secondInnings}</h6>
        <h4>Man of The Match</h4>
        <h6>{details.manOfTheMatch}</h6>
        <h4>Umpires</h4>
        <h6>{details.umpires}</h6>
      </div>
    </div>
  )
}

export default LatestMatch
