import { Link } from "react-router-dom";

const CheatsHomepage = () => {
  return (
    <div className="homepage">
      <Link to="/">
        <div className="panel slide left">Home</div>
      </Link>

      <Link to="/cheats/skyrim">
        <div className="panel slide left">Skyrim</div>
      </Link>

      <Link to="/cheats/ttyd">
        <div className="panel slide left">Paper Mario: Thousand Year Door</div>
      </Link>
    </div>
  );
};

export default CheatsHomepage;
