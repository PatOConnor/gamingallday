import Article from "../../../components/main/article/Article";
const SkyrimAlchemyEngine = () => {
  return (
    <Article
      title="DovahPy"
      hasTableOfContents={false}
      body={
        <>
          <h3>Overview</h3>
          <p>
            This is a project I've worked on here and there over the last few
            years, and the start of this website in a way. It's a python package
            that contains a command line version of the command builder, a
            script that helps optimize potionmaking, and the scrapers I used to
            compile the skyrim data into JSON.
          </p>
          <h3>Alchemy Tool</h3>
          <p>
            The Alchemy Tool is a piece that scans your Skyrim inventory and
            tells you which potions you should make with the ingredients on hand
            to get the maximum value! There are a couple problems so far, that
            being that it's not built to handle three items at once, and you may
            need to run it with administer priveleges (to give it permission to
            send keystrokes), but other than that it works well and I hope it
            serves as a useful tool when you want to clear out your inventory
            and can't figure out how!
          </p>
          <div className="mainLinks">
            <a href="https://github.com/PatOConnor/dovahpy">
              Download on Github
            </a>
          </div>
        </>
      }
    />
  );
};

export default SkyrimAlchemyEngine;
