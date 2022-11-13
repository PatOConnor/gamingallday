import { Link } from 'react-router-dom'

const CheatsHomepage = () => {
  return (
    <div className="main-content">
      Cheats Homepage. 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cheats/skyrim">Link to Skyrim Homepage</Link></li>
        <li><Link to="/cheats/skyrim/commandbuilder">Skyrim Command Builder</Link></li>
      </ul>
    </div>
  );
}

export default CheatsHomepage