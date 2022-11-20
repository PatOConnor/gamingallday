import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import './tableofcontents.css'

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, []);

  return (
    <div className="tableOfContents">
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${heading.level - 2}em` }}>
            <HashLink to={`#${heading.id}`}>{heading.text}</HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
