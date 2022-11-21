// content for sidebar to display on left
import Sidebar from "../sidebar/Sidebar"
const Sitemap = ({showingSitemap, handleShowingSitemap}) => {

  return (
    <Sidebar
      sidebarState={showingSitemap}
      handleStateCallback={handleShowingSitemap}

      jsxContent={<div className="sitemap-wrapper">
        <div className="sitemap">
          <ul>
              {/* put sitemap stuff here */}
          </ul>
        </div>
      </div>}
      />
  )
}