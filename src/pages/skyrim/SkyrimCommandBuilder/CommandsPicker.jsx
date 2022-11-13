//dropdown menu to select commands
import { DropdownButton, Dropdown } from "react-bootstrap"
import './commandbuilder.css'
const CommandsPicker = ({commands, setCurrentCommand}) => {
  
  console.log(commands)
  const updateCommand = (cmd) => {
    console.log('here', cmd, commands[cmd])
    setCurrentCommand(commands[cmd])
  }

  let dropdownItems = []
  for (let cmd in commands){
    //console.log(commands[cmd])
    dropdownItems.push(<Dropdown.Item eventKey={cmd}>{commands[cmd].NAME}</Dropdown.Item>)
  }
    
  return (
    <DropdownButton 
      className="command-button"
      title="Select Command: "
      drop="end"
      onSelect={updateCommand}>
      {dropdownItems}
    </DropdownButton>
  )

}

export default CommandsPicker