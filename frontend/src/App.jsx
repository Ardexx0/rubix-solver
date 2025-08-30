import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/NavBar'
import RubixSide from './components/RubixSide'
import Selector from './components/Selector'
import SideSelect from './components/SideSelect'
import { RubixProvider } from './contexts/RubixContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RubixProvider>
      <NavBar />
      <main>
        <h3>Enter your cube</h3>
        <p>Front - The face facing you, Up - The top face of the cube, Down - The bottom face of the cube</p>
          <p>Left - left face, Right - right face, Back - opposite the Front </p>
        <RubixSide />
        <SideSelect />
        <Selector />
      </main>
    </RubixProvider>
  )
}

export default App
