import {BrowserRouter, Routes, Route} from 'react-router-dom'

//main site imports
import Header from './components/main/header/Header'
import Footer from './components/main/footer/Footer'

import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import CheatsHomepage from './pages/cheatsHomepage/CheatsHomepage'

//skyrim section
import SkyrimHomepage from './pages/skyrim/SkyrimHomepage/SkyrimHomepage'
import SkyrimCommandBuilder from './pages/skyrim/SkyrimCommandBuilder/SkyrimCommandBuilder'
import SkyrimCraftingGuide from './pages/skyrim/SkyrimCraftingGuide/SkyrimCraftingGuide'

import './App.css';
import TtydHomepage from './pages/ttyd/homepage/TtydHomepage'
import TtydPrologue from './pages/ttyd/walkthrough/prologue/TtydPrologue'

const App = () => {
  return (<div id='global-wrapper' className='global-wrapper'>
    <BrowserRouter>
      <Header/>
      
      <Routes>

        <Route path='/' element={<Homepage/>}></Route>
        <Route path='about' element={<About/>}></Route>
        

        <Route path='cheats'>
          <Route index element={<CheatsHomepage/>}/>
          
          <Route path='skyrim'>
            <Route index element={<SkyrimHomepage/>}/>
            <Route path='commandbuilder' element={<SkyrimCommandBuilder/>}></Route>
            <Route path='crafting' element={<SkyrimCraftingGuide/>}></Route>
          </Route>

          <Route path='ttyd'>
            <Route index element={<TtydHomepage/>}/>
            <Route path='collectibles' element={<TtydHomepage/>}/>
            <Route path='walkthrough'>
              <Route path='prologue' element={<TtydPrologue/>}/>
            </Route>
          </Route>
        </Route>         
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>);
}

export default App;
