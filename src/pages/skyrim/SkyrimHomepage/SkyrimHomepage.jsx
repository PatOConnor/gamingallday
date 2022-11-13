import { Link } from 'react-router-dom'

import './skyrimhomepage.css'

const SkyrimHomepage = () => {
  return (
  <div className="homepage">   
    
    <Link to="/cheats/skyrim/commandbuilder">
      <div className='panel slide left'>
        Skyrim Command Builder
      </div>
    </Link>

    <Link to="/cheats/skyrim/alchemy">
      <div className='panel slide right'>
        Skyrim Alchemy Engine
      </div>
    </Link>
    
    <Link to="/cheats/skyrim/crafting">
      <div className='panel slide left'>
        Crafting Guide
      </div>
    </Link>
    
    <Link to="/cheats">
      <div className='panel slide right'>
        Link to Cheats Homepage
      </div>
    </Link>

  </div>)
};

export default SkyrimHomepage