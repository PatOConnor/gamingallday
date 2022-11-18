import { useState } from "react";

// UI Component Imports
import CommandsPicker from "./CommandsPicker";
import UserCommandTray from "./UserCommandTray";
import ParamInputTray from "./ParamInputTray";
import HowToUse from "./HowToUse";

// Data Import
import skyrimCommands from '../../../data/skyrim/skyrim_commands.json'

const SkyrimCommandBuilder = () => {
  const [currentCommand, setCurrentCommand] = useState(skyrimCommands.additem)
  const [commandsList, setCommandsList] = useState([])
  const [popUpShowing, setPopUpShowing] = useState("hidden")

  return (<div className="commandmaker-wrapper">
    {/* spot where inputted commands are rendered */}
    <UserCommandTray 
      commandsList={commandsList}
      setCommandsList={setCommandsList}
      setPopUpShowing={setPopUpShowing}
      />
    {/* "Select a command" input */}
    <CommandsPicker
      commands={skyrimCommands}
      setCurrentCommand={setCurrentCommand}
      />
    {/* spots to add inputs  */}
    <ParamInputTray 
      currentCommand={currentCommand}
      commandsList={commandsList}
      setCommandsList={setCommandsList}
      />
    {/* <HowToUse
      popUpShowing={popUpShowing}
      setPopUpShowing={setPopUpShowing}
      /> */}
  </div>)
}

export default SkyrimCommandBuilder