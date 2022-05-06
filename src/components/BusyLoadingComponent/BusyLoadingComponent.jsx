import React, { Component } from 'react';
import './BusyLoadingComponent.css';
import loading from '../../assets/loading.svg'

class BusyLoadingComponent extends Component{
constructor(){
    super();
}
 render() {
        return (
          <div className='busy-loading-container'>
            <img src={loading} className="loading-logo" alt="loading-logo" />
            <h1>Estamos trabajando...</h1>
          </div>
        )
    }
}
export default BusyLoadingComponent;