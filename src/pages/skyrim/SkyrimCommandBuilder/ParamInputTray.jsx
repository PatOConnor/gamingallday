import { useRef } from "react";
import { Button } from "react-bootstrap";
import SearchBar from "./SearchBar";

// Data Imports
import skyrimAVs from "../../../data/skyrim/skyrim_avs.json";
import skyrimItems from "../../../data/skyrim/skyrim_items.json";
import skyrimLocations from "../../../data/skyrim/skyrim_locations.json";
import skyrimNPCs from "../../../data/skyrim/skyrim_npcs.json";
import skyrimPerks from "../../../data/skyrim/skyrim_perks.json";
import skyrimQuests from "../../../data/skyrim/skyrim_quests.json";
import skyrimSkills from "../../../data/skyrim/skyrim_skills.json";
import skyrimSpells from "../../../data/skyrim/skyrim_spells.json";

const ParamInputTray = ({ currentCommand, commandsList, setCommandsList }) => {
  const containerRef = useRef();
  //Object that maps parameter values to the data pools they could go to
  const paramMap = {
    "<attribute>": skyrimAVs,
    "<item ID>": skyrimItems,
    "<location ID>": skyrimLocations,
    "<NPC ID>": skyrimNPCs,
    "<target>": skyrimNPCs,
    "<perk ID>": skyrimPerks,
    "<quest ID>": skyrimQuests,
    "<skill>": skyrimSkills,
    "<spell ID>": skyrimSpells,
  };

  const addCommand = () => {
    let target = "";
    let cmd = currentCommand.NAME+" ";
    //unrolling element list into an array to use foreach
    const inputFields = [...containerRef.current.children];    
    inputFields.forEach(element => {
      console.log('wrapper', element, typeof element);
      //fucking nested divs
      let textBox = element.children[0].children[0];
      console.log('textbox', textBox, typeof textBox);
      
      let isTarget = textBox.getAttribute("istarget")
      console.log('isTarget var', isTarget, typeof isTarget);

      let text = textBox.getAttribute("value")
      console.log('textbox text', text, typeof text)
      
      textBox.getAttribute("istarget") === "true" ? (target = text+".") : (cmd += text+" ");
    });

    setCommandsList([...commandsList, target + cmd]);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(commandsList.map(elem => elem+"\n"), {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "commands.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element); // preventing memory leak
  }

  return (
    <div id="input-tray">
      <h3>{currentCommand.NAME}</h3>
      <div id="inputSlots" ref={containerRef}>
        {currentCommand.params.map((param, index) => {
          return (
            <SearchBar
              id={"param-" + index}
              text={param}
              data={paramMap[param] || "no-data"}
              isTarget={param === "<target>"}
            />
          );
        })}
      </div>
      <Button onClick={addCommand}>Add Your Command</Button>
      <Button onClick={downloadTxtFile}>Download Commands</Button>
    </div>
  );
};

export default ParamInputTray;
