// components
import TtydHeader from "../../../../components/papermario/header/TtydHeader";
import WalkthroughRow from "../../../../components/papermario/walkthrough/WalkthroughRow";
import WalkthroughFooter
 from "../../../../components/papermario/walkthrough/WalkthroughFooter";

 
 // styles
 import "../ttydwalkthrough.css";
 import TtydEnemyCard from "../../../../components/papermario/walkthrough/TtydEnemyCard";
 
 // images
 
 // Enemies
 import enemiesList from "../../../../data/ttyd/enemies.json"

const TtydPrologue = () => {
  return (
    <div className="main-content walkthrough-grid">
      <TtydHeader />
      <h2>Prologue: A Rogue's Welcome</h2>

      <WalkthroughRow
        imgsrc=""
        imgalt="Title Screen"
        text="Welcome to the Thousand-Year Door guide! Whether you're playing for the first time, coming back after playing it before, or looking up how to get 100% completion, this guide will have all the info you'll need to get the most out of this great game!"
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Mario's House In The Intro Cutscene"
        text="The game opens up like many other Mario games, with a letter from Princess Peach, this time about how Peach wants Mario's help to explore the lands on the magical map she found in the faraway city of Rogueport. If you haven't seen it, the demo before the initial title screen shows Peach in Rogueport buying the map in cutscene form."
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Rougeport Docks Birds-Eye View"
        text="Welcome to Rogueport! There's not too much to do on the rogueport docks in the Prologue, especially not at this moment. Hit the save block immediately to your left, and venture on upwards to find yourself defending a goomba from someone strange she's identifying as a creepazoid!"
      />

      {/* Lord Crump Boss Card */}

      <WalkthroughRow
        imgsrc=""
        imgalt="Crump Yelling at X Nauts"
        text="After the fight, You'll get surrounded by Lord Crump's swarm of X-Naut goons! However, there's too much chaos for them to find you amongst themselves - simply move to the right and you'll be out of harm's way. Follow Goombella up the stairs and enter Rogueport Square!"
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Rogueport BirdsEye during cutscene"
        text="Welcome to Rogueport for real! Goombella will thank you and tell you about how she's in town to learn from Professor Frankly, someone she learned from previously at UGoom (Go, Goombas!). In the background, a brutal turf war rages. Toadsworth meets you both where you are and informs that Princess Peach has gone missing, to much surprise. After you finish talking with him, you're given free reign as Mario and Goombella joins the party!"
      />

      {/* Goombella Partner Card */}

      {/* Rogueport Prologue Location Card */}

      <WalkthroughRow
        imgsrc=""
        imgalt="Breaking Zess T's Contact"
        text="The first thing you should do in Rogueport is ruin someone's day. Zess T is a chef who lives on the West side of Rogueport square. You'll need to do something for her to get access to the West side of town, as well as the item crafting, so it's best to do that right away."
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Mario Gets Jumped Action Shot"
        text="When you head over to East Rogueport to talk to Frankly, Mario gets jumped by a Bandit, who steals 50% of Mario's current coin count! Don't Worry, it's all immediately recoverable, just go into the house behind the Inn in the alley of Rogueport Square, and he's right there. But watch out, if you delay, he'll be long gone by the end of Chapter 1!"
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="East Rogueport Birdseye"
        text="East Rogueport has a few things to do, like upgrading party members and accepting side quests, but the only things you can do right now are talk to people, get a star piece, go into the second door to meet Frankly, or fight Gus, the birdman on the right. He shakes down people going to the East side of the East side for 10 coins a pop, but he's willing to take you on in combat if that's preffered. He's likely to pummel you at this point, but each time you see him you'll be that much stronger and able to stop him from shaking you down."
      />

      {/* Boss Card: Gus */}

      <WalkthroughRow
        imgsrc=""
        imgalt="Frankly On The Pipe"
        text="Open up the second door and head on into Frankly's office. A classic scatterbrained professor, he's amazed about Mario's possesion of the map and demands to take it down to the Thousand-Year Door of legend with you two. He opens up the Warp pipe to the sewers out front, and offers to give a tutorial on battle mechanics. Do it if you like, and head down to the sewers by jumping on the pipe and pressing down on the control stick."
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Goomba Tutorial Fight"
        text="After Goombella gets leched at by three Goombas in the sewer, you enter a tutorial battle. This is the first time you have access to Goombella in combat! Her headbonk functions like Mario's Jump, and her tattle ability tells you the stats and info about the targeted enemy, as well as causing that type of enemy to have a HP bar displayed under their sprite for the rest of the game."
      />

      <h3>New Enemies:</h3>
      {/* Enemy Panel */}
      <div className="enemies-wrapper">
        {/* Enemy Card: Goomba */}
        <TtydEnemyCard enemy={enemiesList["1"]}/>
        {/* Enemy Card: Paragoomba */}
        <TtydEnemyCard enemy={enemiesList["2"]}/>
        {/* Enemy Card: Spiky Goomba */}
        <TtydEnemyCard enemy={enemiesList["3"]}/>
      </div>

      <WalkthroughRow
        imgsrc=""
        imgalt="Sewers B2F East"
        text="After that fight, you can continue on down through the sewers towards the Thousand-Year Door. On the second floor down, There's a few goombas who fight you alone and two item blocks you can open using your hammer. Go past the barred doorway and smash the yellow blocks to open the pipe to the next floor. (You can go to the left, but you won't be able to do anything on that board)"
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Sewers B3F East"
        text="
      You're almost at the Thousand-Year Door! First things first, grab the star piece behind the huge yellow block (wow!), then go up the stairs to the right. Go through the doorway to talk to a black treasure chest that promises to reward you when you release the spirit within. To avoid letting this opportunity go to waste, drop down to the left of the doorway to get the key. In addition, there's a new enemy in this room! Spinias are the first 3-HP enemy in the game, so make sure to get a first strike to make fighting them faster! They are also fairly easy to superguard."
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Paper Airplane Mario"
        text="
      Using the evil curse that the spirit within the chest surrepticiously (sic) cast upon you, press Y while standing on the platform to fly across the room towards the doorway on the left beyond the yellow block"
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Thousand Year Door Sanctum"
        text="At the Thousand-Year Door, you're treated to a cool cutscene where the destination of the first chapter gets masrked on Mario's magical map. The cutscene then continues to Frankly's lab, until the game finally gives you the reins outside his door. You only get a step before he gives you a badge and asks you if you want a tutorial on the badge system. If you've equipped anything in a video game before, the answer's no."
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Toad Bros. Bazaar Normal"
        text="You're nearly at the end of the prologue! If you haven't explored Rogueport yet, now would be a great time to do so! It's highly recommended to have a fire flower in your inventory for the upcoming segment, and there are a bunch of star pieces available that you can trade to Dazzle for a decent badge. Also, the Trouble Center and Howz of Badgez will open as soon as you enter Chapter 1 if you don't mind doing a quick backtrack. With new equipment, you actually have a shot at showing Gus who's boss! You won't need to bypass him unless you're going to the trouble center, so it can wait until you're strong enough to win easily."
      />

      <WalkthroughRow
        imgsrc=""
        imgalt="Blooper Pre Fight"
        text="Once You feel like you're ready to continue on, go east in the sewers to a paper airplane platform, and take it further east. You'll come to a dead end, with a blooper tentacle hanging out on the ledge. Do what comes naturally and you'll start the first boss of the game!"
      />

      {/* Blooper Enemy Card */}
      <TtydEnemyCard enemy={enemiesList["98"]}/>


      <WalkthroughRow
        imgsrc=""
        imgalt="Petal Meadows Pipe"
        text="After fighting the blooper, some moving platforms appear where he was that take you over to a stone looking warp pipe on a platform in the middle of the board. Don't worry if you missed the tattle for Blooper, all missable tattles will appear in Prof. Frankly's trash can! Enter the pipe, and begin your quest for the crystal stars!"
      />

      <WalkthroughFooter
        prevLink=""
        prevText="-"
        nextLink="/cheats/ttyd/walkthrough/chapter1"
        nextText="Chapter 1"
        />
      
      

    </div>
  );
};

// <WalkthroughRow
// imgsrc=""
// imgalt=""
// text=""
// />

export default TtydPrologue;
