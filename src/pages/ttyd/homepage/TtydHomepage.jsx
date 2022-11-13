import { Link } from "react-router-dom";
import TtydHeader from "../../../components/papermario/header/TtydHeader";
import "./ttydhomepage.css";

const TtydHomepage = () => {
  return (
    <div className="main-content ttydboard">
      <TtydHeader/>
      <div className="gridboard">
        <Link className="star" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col1">Collectibles</div>
        </Link>

        <Link className="part" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col2">Party</div>
        </Link>

        <Link className="item" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col1">Items</div>
        </Link>

        <Link className="badg" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col2">Badges</div>
        </Link>

        <Link className="spec" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col1">Special Moves</div>
        </Link>

        <Link className="enem" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col2">Enemies</div>
        </Link>

        <Link className="cook" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col1">Cooking Guide</div>
        </Link>

        <Link className="shop" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col2">Shopping Guide</div>
        </Link>

        <Link className="trou" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col1">Trouble Center</div>
        </Link>

        <Link className="strat" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col2">Strategies</div>
        </Link>

        <Link className="pit" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col1">Pit of 100 Trials</div>
        </Link>

        <Link className="extl" to="/cheats/ttyd/walkthrough">
          <div className="pagelink col2">External Resources</div>
        </Link>
      </div>

      <div className="walkthrough">
        {/* <h4>Walkthrough</h4> */}
        <Link to="/cheats/ttyd/walkthrough/prologue">
          <p>Prologue</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter1">
          <p>Chapter 1</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter2">
          <p>Chapter 2</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter3">
          <p>Chapter 3</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter4">
          <p>Chapter 4</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter5">
          <p>Chapter 5</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter6">
          <p>Chapter 6</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter7">
          <p>Chapter 7</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Chapter8">
          <p>Chapter 8</p>
        </Link>
        <Link to="/cheats/ttyd/walkthrough/Postgame">
          <p>Postgame</p>
        </Link>
      </div>
    </div>
  );
};

export default TtydHomepage;
