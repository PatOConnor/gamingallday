import { useState } from "react";
const SearchBar = ({ id, text, data, isTarget }) => {
  const defaultWord = isTarget ? "player" : "";

  const [resultData, setResultData] = useState([]);
  const [enteredWord, setEnteredWord] = useState(defaultWord);
  const [showResults, setShowResults] = useState(false)

  // REPLACE THIS COMMENT WITH PLAN ON HOW TO REFACTOR AND ADD MEMOIZATION
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setEnteredWord(searchWord);
    const filteredData = Object.entries(data).filter((key, value) => {
      // console.log(key)
      //idk why key[1] is where the data goes but so it goes
      // console.log(key[1], key[1].NAME.includes(searchWord));
      return key[1].NAME.toLowerCase().includes(searchWord.toLowerCase());
    });
    setResultData(Object.fromEntries(filteredData));
    setShowResults(true)
  };

  const clearValue = (event) => {
    setEnteredWord("");
  };

  const closeSearchPane = (event) => {
    setShowResults(false)
  };

  return (
    <div id={id} className="search">
      <div className="searchInputs">
        <input
          className="searchWord"
          type="text"
          placeholder={text}
          value={enteredWord}
          onChange={handleFilter}
          istarget={isTarget.toString()}
        ></input>

        <span className="clearButton" onClick={clearValue}>
        ❌Clear Search Text
        </span>
        <span className="minimizeButton" onClick={closeSearchPane}>
        🤏Minimize Results
        </span>
      </div>
      <div className={`dataResult  ${showResults ? "" : "hidden"}`}>
        {/* turning an object of objects into a list of tags */}
        {Object.entries(resultData)
          .slice(0, 30)
          .map((key, value) => {
            return (
              <div
                className="searchOutput"
                onClick={() => {
                  setEnteredWord(key[1].CODE);
                }}
              >
                <span className="searchText">{key[1].NAME}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
