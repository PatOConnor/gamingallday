import { Link } from "react-router-dom";



const Homepage = ({ handleShowingSitemap }) => {

  

  return (
    <div className="main-content rows">
      {/* Not sure why the inline style causes this to be finicky but reversing the nesting so it looks right breaks the CSS */}
      <Link onClick={handleShowingSitemap}>
        <div className="panel slide left">All Games</div>
      </Link>

      <Link to="/about">
        <div className="panel slide right">About</div>
      </Link>

      <Link to="/contact">
        <div className="panel slide left">Contact</div>
      </Link>

      <a href="https://patoconnor.github.io">
        <div className="panel slide right">My Other Stuff</div>
      </a>
      
    </div>
  );
};

export default Homepage;
