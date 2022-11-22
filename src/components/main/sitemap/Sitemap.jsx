// content for sidebar to display on left
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Sitemap = ({ showingSitemap, handleShowingSitemap }) => {
  return (<>
    {/* <Button onClick={handleShowingSitemap}>Click</Button> */}
    <Sidebar
      sidebarState={showingSitemap}
      handleStateCallback={handleShowingSitemap}
      jsxContent={
        <div className="sitemap-wrapper">
          <div className="sitemap">
            <ul>
              <li style={{ marginLeft: "em" }}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skyrim">Skyrim</Link>
              </li>

              <li>
                <Link to="/ttyd">Paper Mario: The Thousand Year Door</Link>
              </li>
            </ul>
          </div>
        </div>
      }
      />
      </>
  );
};

export default Sitemap