import { Link } from "react-router-dom";

const WalkthroughFooter = ({ prevLink,prevText, nextLink, nextText }) => {
  return (
    <div className="walkthrough-footer">
      <Link to={prevLink}>{prevText}</Link>
      <Link to="/cheats/ttyd">Paper Mario: Ttyd</Link>
      <Link to={nextLink}>{nextText}</Link>
    </div>
  );
};

export default WalkthroughFooter;
