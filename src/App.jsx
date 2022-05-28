import React, {useState} from 'react'
import './App.css'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import PanelComponent from './components/PanelComponent/PanelComponent'

function App() {

  const [activeElement, setActiveElement] = useState(0)

  return (
    <div className="App">
      <NavBarComponent activeElement={activeElement} setActiveAppElement={setActiveElement}/>
      <PanelComponent activeElement={activeElement}/>
    </div>
  )
}

export default App
