import './css/App.css'
import Header from './components/Header'
import CardGrid from './components/CardGrid'
import { useState } from 'react';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <CardGrid currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore}/>
    </>
  )
}

export default App
