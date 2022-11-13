const WalkthroughRow = ({ imgsrc, imgalt, text }) => {
  // this looks unneccesary but i intend on bloating it up with divs and shit for CSS
  return (
    <div className="walkthrough-row">
      {/* image should blow up for mobile users */}
      <img src={imgsrc} alt={imgalt} />
      {/* maybe text should be a JSX args? */}
      <div>
      <p>{text}</p>
      </div>
    </div>
  );
};

export default WalkthroughRow;
