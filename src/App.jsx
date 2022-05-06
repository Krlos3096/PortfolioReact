import './App.css'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import BusyLoadingComponent from './components/BusyLoadingComponent/BusyLoadingComponent'

function App() {

  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <BusyLoadingComponent></BusyLoadingComponent>
    </div>
  )
}

export default App
