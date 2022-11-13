import { Link } from 'react-router-dom'

const Homepage = () => {

  return (
    <div className="main-content rows">


      <Link to="/cheats">
        <div className='panel slide left'>
          All Games
        </div>
      </Link>
      
      <Link to="/cheats/skyrim">
        <div className='panel slide right'>
          Skyrim
        </div>
      </Link>
      
      <Link to="/cheats/ttyd">
        <div className='panel slide left'>
          Paper Mario: The Thousand-Year Door
        </div>
      </Link>

      <Link to="/about">
        <div className='panel slide right'>
          About
        </div>
      </Link>

    </div>)
}

export default Homepage