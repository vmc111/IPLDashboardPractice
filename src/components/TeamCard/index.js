// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props

  return (
    <Link to={`/team-matches/${item.id}`}>
      <li className="card" key={item.id}>
        <img src={item.teamImageUrl} alt={item.id} className="team-logo" />
        <p className="team-name">{item.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
