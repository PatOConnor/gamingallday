import { useState, useEffect } from "react";
const SearchBar = ({ id, text, data, isTarget }) => {
  const [enteredWord, setEnteredWord] = useState(isTarget ? "player" : "");
  const [showingResults, setShowingResults] = useState(false);
  const [resultData, setResultData] = useState([]);

  /// Need to make resultData into an array with a "key" prop
  //this will allow me to use it as a dependency in the  useEffect hook

  useEffect(() => {
    // set to true when object updates; closure is manual by user
    setShowingResults(true);
  }, resultData);

  const handleTextUpdate = (event) => {
    clearTimeout();
    const searchWord = event.target.value;
    setEnteredWord(searchWord);
    setTimeout(() => {
      updateSearch(searchWord);
    }, 500);
  };

  const updateSearch = (searchWord) => {
    const dataSet =
      resultData.length === 0
        ? ["", Object.entries(data)]
        : (() => {
            let closestMatch;
            resultData.forEach((item, index) => {
              let word = item[0];
              if (searchWord.includes(word) && word.includes(closestMatch)) {
                closestMatch = index;
              }
            });
            console.table([
              ["what is closest match?", closestMatch],
              ["what is dataSet?", dataSet],
            ]);
            return resultData[closestMatch];
          })();

    console.log(dataSet);
    // "value" is unused but it breaks if it is missing
    const filteredData = dataSet[1].filter((key, value) => {
      return key[1].NAME.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(filteredData);
    console.log(
      "maybe the setState assignment doesn't work",
      resultData,
      searchWord,
      filteredData
    );

    setResultData([...resultData, [searchWord, filteredData]]);
  };

  const clearValue = () => {
    setEnteredWord("");
  };

  const closeSearchPane = () => {
    setShowingResults(false);
  };

  return (
    <div id={id} className="search">
      <div className="searchInputs">
        <input
          className="searchWord"
          type="text"
          placeholder={text}
          value={enteredWord}
          onChange={handleTextUpdate}
          istarget={isTarget.toString()}
        ></input>

        <span className="clearButton" onClick={clearValue}>
          ❌
        </span>
        <span className="minimizeButton" onClick={closeSearchPane}>
          🤏
        </span>
      </div>
      <div className={`dataResult  ${showingResults ? "" : "hidden"}`}>
        {/* turning an object of objects into a list of tags */}
        {[] ||
          resultData[enteredWord].slice(0, 30).map((key, value) => {
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

// // replace with ternary for readability? Leaving it here if its broken
// let dataSet;
// if (resultData.length === 0) {
//   //first search uses full dataset, converted into array
//   dataSet = ["", data.entries()];
// } else {
//   let closestMatch;
//   resultData.forEach((item, index) => {
//     let word = item[0]
//     if (searchWord.includes(word) && word.includes(closestMatch)) {
//       closestMatch = index;
//     }
//   });
//   dataSet = resultData[closestMatch];
//   console.table([['what is closest match?', closestMatch], ["what is dataSet?", dataSet]])
// }

export default SearchBar;
