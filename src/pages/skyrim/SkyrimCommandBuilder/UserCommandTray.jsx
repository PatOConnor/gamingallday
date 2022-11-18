const UserCommandTray = ({ commandsList, setCommandsList }) => {  
  
  return (<div id="commands-list">
    {commandsList.map(cmd => <li>{cmd}</li>)}
    </div>)
};

export default UserCommandTray;
