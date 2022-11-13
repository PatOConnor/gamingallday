import MoveCard from "./MoveCard"

const PartnerCard = ({props}) => {
  const {
    partnerName, 
    mainImgUrl,
    desc,
    stats,
    overworldAction,
    moves} = {...props}
  return (
    <div className="partnerCard">
      <div className="infoRow">
        <img src={mainImgUrl}></img>
        <h3>{partnerName}</h3>
        <p>{desc}</p>
        <p>{stats}</p>
        <p>{overworldAction}</p>
      </div>
      <div className="moveRow">
        {moves.map(moveData => {MoveCard(moveData)})}
      </div>
    </div>
  )
}

export default PartnerCard