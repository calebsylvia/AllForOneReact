import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import LevelZero from './Components/levelZero';
import LevelOne from './Components/levelOne';
import LevelTwo from './Components/levelTwo';
import LevelThree from './Components/levelThree';
import LevelFour from './Components/levelFour';
import LevelFive from './Components/levelFive';
import LevelSix from './Components/levelSix';
import LevelSeven from './Components/levelSeven';
import LevelEight from './Components/levelEight';
import LevelNine from './Components/levelNine';

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeComponent/>}/>
          <Route path='levelZero' element={<LevelZero/>}/>
          <Route path='levelOne' element={<LevelOne/>}/>
          <Route path='levelTwo' element={<LevelTwo/>}/>
          <Route path='levelThree' element={<LevelThree/>}/>
          <Route path='levelFour' element={<LevelFour/>}/>
          <Route path='levelFive' element={<LevelFive/>}/>
          <Route path='levelSix' element={<LevelSix/>}/>
          <Route path='levelSeven' element={<LevelSeven/>}/>
          <Route path='levelEight' element={<LevelEight/>}/>
          <Route path='levelNine' element={<LevelNine/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
