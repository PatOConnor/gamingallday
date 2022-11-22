import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//main site imports
import Header from "./components/main/header/Header";
import Footer from "./components/main/footer/Footer";
import Sitemap from "./components/main/sitemap/Sitemap";

import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";

//skyrim section
import SkyrimHomepage from "./pages/skyrim/SkyrimHomepage/SkyrimHomepage";
import SkyrimCommandBuilder from "./pages/skyrim/SkyrimCommandBuilder/SkyrimCommandBuilder";
import SkyrimCraftingGuide from "./pages/skyrim/SkyrimCraftingGuide/SkyrimCraftingGuide";
import DovahPy from "./pages/skyrim/DovahPy/DovahPy";

import "./App.css";
import TtydHomepage from "./pages/ttyd/homepage/TtydHomepage";
import TtydPrologue from "./pages/ttyd/walkthrough/prologue/TtydPrologue";

const App = () => {
  const [showingSitemap, setShowingSitemap] = useState(false);
  const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
  const handleShowingSiteMap = () => {setShowingSitemap(!showingSitemap);}

  return (
    <div id="global-wrapper" className="global-wrapper">
      <BrowserRouter basename={basename}>
        <Header 
        handleShowingSitemap={handleShowingSiteMap}
        />
        <Footer />
        <Sitemap
          showingSitemap={showingSitemap}
          handleShowingSitemap={handleShowingSiteMap}
        />

        <Routes>
          <Route path="/" element={<Homepage handleShowingSitemap={handleShowingSiteMap}/>}></Route>
          <Route path="about" element={<About />}></Route>

          <Route path="skyrim">
            <Route index element={<SkyrimHomepage />} />
            <Route
              path="commandbuilder"
              element={<SkyrimCommandBuilder />}
            ></Route>
            <Route path="crafting" element={<SkyrimCraftingGuide />}></Route>
            <Route path="dovahpy" element={<DovahPy />}></Route>
          </Route>

          <Route path="ttyd">
            <Route index element={<TtydHomepage />} />
            <Route path="collectibles" element={<TtydHomepage />} />
            <Route path="walkthrough">
              <Route path="prologue" element={<TtydPrologue />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
