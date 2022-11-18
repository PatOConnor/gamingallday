import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UserCommandTray = ({ commandsList, setCommandsList, setPopUpShowing }) => {
  const [downloadLink, setDownloadLink] = useState('')
  
  const makeTextFile = () => {

    
    const data = new Blob([commandsList.join('\n')], {type: 'text/plain'})

    if (downloadLink !== '') 
      window.URL.revokeObjectURL(downloadLink)

    setDownloadLink(window.URL.createObjectURL(data))
  }
  
  useEffect(() => {
    makeTextFile()
  }, commandsList)

  return (
  <div id="commands-list">
    {commandsList.map(cmd => <li>{cmd}</li>)}
    {/* Hacky Solution to use HTML download with React Bootstrap Button; should replace with my own buttons */}
    <a href={downloadLink} download="commands.txt">
      <Button>Download Batch File</Button>
    </a>
    <Button onClick={() => setPopUpShowing("")}>How To Use Batch Files</Button>
  </div>)
};

export default UserCommandTray;
