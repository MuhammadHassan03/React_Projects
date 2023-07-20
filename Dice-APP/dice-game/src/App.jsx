import { useState } from 'react'
import './App.css'
import SplashScreen from './Components/SplashScreen'
import GamePage from './Components/GamePage';

function App() {

  const [game, isGameStarted] = useState(false);
  const setGameStarted = () => {
    isGameStarted((prev) => !prev);
  }
  return (
    <>
      {game ?  <GamePage /> : <SplashScreen toggle={setGameStarted} />}
    </>
  )
}

export default App
