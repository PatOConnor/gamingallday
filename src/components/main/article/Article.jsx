import { useState } from "react";
import "./article.css";
import TableOfContents from "../TableOfContents/TableOfContents";
import Sidebar from "../sidebar/Sidebar";

const Article = ({ title, body, hasTableOfContents }) => {
  const [showingSideBar, setShowingSideBar] = useState(false);
  //set style of table of contents wrapper
  const handleSidebarState = () => {
    setShowingSideBar(!showingSideBar);
  };
  return (
    <>
      <div className="mainWrapper">
        <div className="titleWrapper">
          {/* only put button for sidebar when needed */}
          {hasTableOfContents ? (
            <div
              onClick={() => {
                handleSidebarState();
              }}
            >
              ☰
            </div>
          ) : (
            <div></div>
          )}

          <h2>{title}</h2>
          <div></div>
        </div>
        <div className="bodyWrapper">{body}</div>
      </div>
      <Sidebar
        jsxContent={<TableOfContents />}
        sidebarState={showingSideBar}
        handleStateCallback={handleSidebarState}
      />
    </>
  );
};

export default Article;
