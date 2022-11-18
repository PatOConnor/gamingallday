const HowToUse = (popUpShowing, setPopUpShowing) => {
  return (
    <div className={`popUpOuter ${popUpShowing}`}
         onClick={setPopUpShowing("hidden")}>
      <div className="popUpInner"
            onClick={event => event.stopPropagation()}>
        <h3>How to save and load your list ingame</h3>
        <p>
          Save the file in the same place as your skyrim.exe file. If you don't
          know where that is, follow the instructions below:
        </p>
        <ol>
          <li>Open A Folder and click on "My PC"</li>
          <li>Click on your hard drive at the bottom</li>
          <li>
            Navigate Your Hard Drive to get to the skyrim folder within \n
            C:\Program Files (x86)\Steam\steamapps\common\
          </li>
          <li>
            After the file is in that folder, you can run the list of commands
            by typing "bat [filename]" in the console
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToUse;
