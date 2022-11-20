const SmithingGuide = () => {
  return (
    <>
      <h3 id="h-smithing-head">Smithing</h3>
      <p>
        Smithing is one of the primary ways to acquire new pieces of gear, and
        fill out matching sets of gear that you find as loot. You can definitely
        get by without Smithing by looting, buying from merchants, and using
        equipment given as part of quests, but a high smithing stat allows you
        to improve the damage stats of your weapons past where they innately
        are, and is an easy way to get overpowered equipment very quickly.
      </p>

      <h4 id="h-smithing-howto">How Smithing Works</h4>

      <h5 id="h-smithing-howto-forge">Forging Equipment</h5>
      <p>
        Activating a forge (or anvil!) will enter the smithing UI. Its very
        straightforward; you can swap betwen armor types and use different items
        to create weapons and armor, usually some combination of metal ingots
        and leather straps
      </p>

      <p>
        To craft different types of armor like steel, elven, et cetera, you'll
        need to acquire the related perk in the smithing skill tree.
      </p>

      <h5 id="h-smithing-howto-improve">Improving Equipment</h5>
      <p>
        Improving equipment is a bit more complicated, but not by much. You need
        a piece of the base material the item is made from, and access to either
        a grindstone or a workbench, depending on if you're improving a weapon
        or an armor piece.
      </p>
      <p>
        You can improve any unenchanted armor piece from the start of the game,
        so long as you have the material. However, if you have the related perk
        in the skill tree (for example, "Steel Smithing" when improving a steel
        helmet), your improvement will cause a much higher stat boost. This has
        the side-effect of making leather, hide, and iron less effective in the
        late-game from not getting that boost.
      </p>

      <h4 id="h-smithing-where">Where To Find Materials</h4>
      <h5 id="h-smithing-where-store">Merchants That Sell Materials</h5>
      <p>
        The first place to look when you need that last ingot to make your armor
        piece is directly to the left to barter with the blacksmith. Blacksmiths
        always have some crafting materials in the "misc" section of their
        inventory, and as you level up, they will tend to get better and more
        materials in stock. This can get expensive though, so if you want making
        money to be a side effect of working the forge, this should be used
        sparingly.
      </p>
      <p>
        In addition, most of the blacksmiths have a pile of ingots laying around
        next to their workstation. If nobody sees you steal the ingot, and you
        immediately craft it into an item, the theft may as well have never
        happened.
      </p>

      <p>
        You can also find a small selection of smithing materials at most
        general goods stores too, but nothing as much as you would find at a
        blacksmith.
      </p>

      <h5 id="h-smithing-where-mine">
        The Sustainable Bandit: Smelting Ore and Tanning Leather
      </h5>
      <p>
        So You want to make gear from scratch or for free? You need raw
        materials. The raw materials for leather and ingot are pelts and ores,
        and they get converted to their usable forms via the "tanning rack" and
        "smelter" fixtures. Tanning racks are available almost everywhere there
        is a forge or anvil, but smelters are more rare, generally only seen
        near mines or at large city blacksmiths.
      </p>
      <h6 id="h-smithing-where-leather">Animal Pelts</h6>
      <p>
        Leather is the easiest crafting material to come across. All you have to
        do is turn yourself into a blight upon the wilderness. Take the pelt of
        every wolf and bear that attacks you, and that of every fox, deer, and
        goat that's unlucky to be seen by you - if you can catch up. Always
        remember to keep your pelts in pelt form until you're ready to make the
        item, because it gets much heavier once broken down into leather.
      </p>

      <h6 id="h-smithing-where-mining">Ore Veins</h6>
      <p>
        There are many mines strewn about Skyrim, and many iron veins on the
        surface even also! Iron is the most common by far, but there are veins
        for all types of ore that skyrim has.
      </p>

      <p>
        To extract the ore from the vein, you need to use a pickaxe. You can
        activate the vein with a pickaxe equipped to watch an animation, but
        it's actually more fun and faster to use your standard weapon swing to
        hit the pickaxe at the ore vein! You can also dual-wield them and use
        the shout for faster attack swings for even more efficient mining.
      </p>

      <h6 id="h-smithing-where-dwemer">Bored? Nord? Raid A Dwemer Ruin!</h6>
      <p>
        If the above sounds tedious and you'd just like a better way to bash
        some heads, or make money, then you're in luck! The raw material for
        dwarven gear is dwemer metal scraps, which are scattered around dwemer
        ruins and dropped by dwemer automata you fight there. If you don't want
        to go quite that far but still want to get dwarven gear, you can always
        loot the Dwemer Museum, accessed from Understone Keep in Markarth.
        You'll just need to pass a lockpick check + sneak check, or have to do a
        favor for the court wizard and get the ability to go there without
        trespassing. (But you still need to sneak to steal!)
      </p>

      <h6 id="h-smithing-transmute">Easy Jewelry: Transmute Mineral Ore</h6>
      <p>
        If you're playing a mage or otherwise want to get some blank rings,
        necklaces, and circlets for enchanting purposes, you don't have to pay
        those exorbitant prices at the whiterun jeweler! North of Whiterun,
        there is an iron mine inhabited by bandits called Halted Stream Camp,
        and next to the rewards chest, there's an alteration spellbook. The
        spell inside it is Transmute Mineral Ore, and it'll take any silver in
        your inventory and turn it to gold, and any iron and turn it to silver.
        Gold has higher priority than silver, so you'll need to drop the silver
        ore from your inventory to prevent it from turning it to gold if you
        want to actually make something of silver, and it costs a lot of MP, but
        it's still a very efficient way of making quick cash and smithing xp,
        and is one of the best ways to get materials for leveling enchanting.
      </p>

      <h4 id="h-smithing-perks">Recommended Perks</h4>
      <ul>
        <li>Steel Smithing</li>
        <li>Arcane Smithing</li>
      </ul>
      <p>
        The only perks that are useful regardless of build are these two,
        because they allow you to freely improve pieces of enchanted equipment,
        which is useful in nearly all playstyles. Otherwise, it really depends
        on what type of armor you like to use; get the perks that allow you to
        craft the things you want.
      </p>
    </>
  );
};

export default SmithingGuide;
