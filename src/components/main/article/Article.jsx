import { useState } from "react";
import { useRef } from "react";
import "./article.css";
import TableOfContents from "../TableOfContents/TableOfContents";

const Article = ({ title, body }) => {
  const contents = useRef();

  //set style of table of contents wrapper
  const handleTableOfContents = () => {};

  return (
    <div className="mainWrapper">
      <div className="titleWrapper">
        <div></div>
        <h2>{title}</h2>
        <div
          onClick={() => {
            handleTableOfContents();
          }}
        >
          ☰
        </div>
      </div>
      <div className="tableOfContentsWrapper" ref={contents}>
        <TableOfContents />
      </div>
      <div className="bodyWrapper">{body}</div>
    </div>
  );
};

export default Article;
