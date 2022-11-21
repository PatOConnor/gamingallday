const EnchantingGuide = () => {
  return (
    <>
      <h3 id="h-enchanting-head">Enchanting</h3>
      <p>
        Enchanting is how you make those items you see that have added effects,
        like "Iron Sword of Frost" or "Novice Robes of Destruction". These items
        can be extremely useful, and are neccesary to make a build that's
        obscenely powerful.
      </p>

      <h4 id="h-enchanting-howto">How Enchanting Works</h4>
      <p>You need three things to create an enchanted item:</p>
      <ol>
        <li>An item to enchant</li>
        <li>A filled soul gem</li>
        <li>Knowledge of the desired enchantment</li>
      </ol>
      <p>
        When you activate an enchanting table, you select one of each, and
        depending on your enchanting skill and the soul gem you use, you'll get
        better or worse results.
      </p>

      <p>
        To get a filled soul gem, you must either acquire an already-filled soul
        gem or trap an enemy's soul inside an empty soul gem. Different enemies
        have differently sized souls, and you can fill a soul gem with any soul
        up to the size in the name of the gem with the soul trap spell or an
        item enchanted with soul trap.
      </p>

      <p>
        To learn a type of enchantment, you need to first acquire an item that
        already has the enchantment you're looking for. It's counterintuitive,
        but the best items you can create are going to be better than any item
        you'd find. However, early on, if you find a weapon with an enchantment
        you like, hang onto it and enchant other things to build our level up to
        the point where you can make a better version of it!
      </p>

      <h4 id="h-enchanting-where">Where To Find Materials</h4>

      <h5 id="h-enchanting-where-sg">Where To Find Soul Gems</h5>
      <ul>
        <li>Inside treasure chests you'll find in ruins, bandit camps, etc.</li>
        <li>For sale from court mages</li>
        <li>General Stores sometimes stock low-level gems</li>
        <li>
          Straight up laying around in any of the above locations, especially in
          places where mages live.
        </li>
      </ul>

      <h5 id="h-enchanting-where-items">Where To Find Enchanted Items</h5>
      <p>Finding enchanted items can be a bit trickier than most other searches you'll make in this game. Blacksmiths usually have a couple for sale, but they cost exorbitant prices. However, there are many laying around in known areas.</p>

      <h5 id="h-enchanting-recharge">Recharging Items</h5>
      <p>
        At some point, you'll find that your sword of flames isn't igniting
        enemies, or your bow of soul trap isn't trapping enemy souls. The
        problem is that your weapon's soul meter is empty, and it needs to be
        recharged with a soul gem. Be careful not to waste your grand or greater
        soul gems on this though, they're better suited for enchanting!
      </p>

      <h5 id="h-enchanting-black-star">
        The Sustainable Sorcerer: Follow The Black Star
      </h5>
      <p>If you want to avoid getting a bunch of grand soul gems, the game gives you a good solution! If you get the misc. mission "Go to the Shrine of Azura", definitely do that. If you don't have it, you can just go there to start the quest. Without spoiling the events of the quest, you get a choice at the end, and if you pick "the black star", you'll get a reusable black soul gem!</p>

      <h4 id="h-enchanting-perks">Recommended Perks For All Builds</h4>
      <ul className="group">
        <li>Enchanter (5/5)</li>
        <li>Fire, Frost, Storm Enchanter</li>
        <li>Insightful Enchanter</li>
        <li>Corpus Enchanter</li>
        <li>Extra Effect</li>
      </ul>

      <p>All of the perks in this tree have incredible usefulness, besides the ones regarding recharging soul gems. If you're not primarily a warrior, the ones regarding elemental damage can be skipped also, as you won't be using the effects much.</p>
    </>
  );
};

export default EnchantingGuide;
