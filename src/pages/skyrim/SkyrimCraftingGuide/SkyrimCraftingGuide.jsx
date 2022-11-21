import Article from "../../../components/main/article/Article";
import AlchemyGuide from "./AlchemyGuide";
import EnchantingGuide from "./EnchantingGuide";
import SmithingGuide from "./SmithingGuide";
const SkyrimCraftingGuide = () => {
  return (
    <Article
      title="Skyrim Crafting Basics"
      hasTableOfContents={true}
      body={
        <>
          <h3 id="h-types-of-crafting">Types of Crafting</h3>
          <p>
            Note: This Article is written for those who haven't played much
            skyrim or are coming back to it after a long time and need a general
            refresher. If you're familiar with the game and want to get some
            next-level crafting going on, check out the Breaking The Game Guide.
          </p>
          <p>
            In this game, there's generally three types of crafting: smithing,
            enchanting, and alchemy. They're fairly self-explanatory; smithing
            is how you turn items into equipment, enchanting is how you imbue
            special effects on equipment like fire damage or increased stealth,
            and alchemy is how you turn inventory items into poisons to put onto
            weapons or potions to use in your inventory. You can also cook food
            at various cooking pots, which is important in survival mode, but
            not very useful in the base game.
          </p>
          <hr />
          <SmithingGuide />
          <hr />
          <EnchantingGuide />
          <hr />
          <AlchemyGuide />
        </>
      }
    />
  );
};
export default SkyrimCraftingGuide;
