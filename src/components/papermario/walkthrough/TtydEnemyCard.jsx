const TtydEnemyCard = ({ enemy }) => {
  let { enemyName, location, imgurl, hp, def, attacks, tattle, tips } = enemy;

  return (
    <div className="enemyCardOuter">
      <div className="enemyCardInner">
        <div className="imageWrapper">
          <img
            className="enemyImage"
            src={imgurl}
            alt={"picture of " + enemyName}
          />
        </div>

        <div className="tattleWrapper">
          <h4 className="enemyCardHeading">Tattle Log Entry</h4>
          <hr />
          <p>{tattle}</p>
        </div>

        <div className="infoWrapper">
          <div className="NAME">
            <h4>{enemyName}</h4>
            <hr />
          </div>
          <div className="HP">
            <h4>HP: {hp}</h4>
          </div>
          <div className="DEF">
            <h4>DEF: {def}</h4>
          </div>
          <div className="LOC">
            <h4>Located In:</h4>
            <ul>
              {location.map(elem => <li>{elem}</li>)}
            </ul>
          </div>
          <div className="ATK">
            <h4>Attacks:</h4>
            <p>{attacks}</p>
          </div>
        </div>

        <div className="tipsWrapper">
          <h4>Tips</h4>
          <hr />
          <p>{tips}</p>
        </div>
      </div>
    </div>
  );
};
export default TtydEnemyCard;
