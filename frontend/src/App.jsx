import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/NavBar'
import RubixSide from './components/RubixSide'
import Selector from './components/Selector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <h3>Enter your cube</h3>
        <RubixSide />
        <p>Front</p>
        <Selector />
      </main>
    </>
  )
}

export default App
