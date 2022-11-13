const MoveCard = moveData => {
  const {
    moveName,
    damage,
    moveImgUrl,
    moveDesc,
    actionCommand,
    stylishTiming,
  } = {...moveData}

  return (<div className="moveCard">
    <h4>{moveName}</h4>
    <img src={moveImgUrl}></img>
    <p>{damage}</p>
    <p>{moveDesc}</p>
    <p>{actionCommand}</p>
    <p>{stylishTiming}</p>
  </div>)
}

export default MoveCard