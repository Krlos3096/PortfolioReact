import React, {useState} from 'react'
import './App.css'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import PanelComponent from './components/PanelComponent/PanelComponent'
import { changeActiveElement } from './redux/actions/menuActions'
import { connect } from 'react-redux'

function App({ setActiveElement, activeElement }) {

  return (
    <div className="App">
      <NavBarComponent activeElement={activeElement} setActiveAppElement={setActiveElement}/>
      <PanelComponent activeElement={activeElement}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeElement: state
  }
}

const mapDispatchToProps = dispatch => {
    return {
      setActiveElement: (activeElement) => dispatch(changeActiveElement(activeElement))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
