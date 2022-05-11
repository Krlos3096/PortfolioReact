import React, { Component } from "react";
import "./BusyLoadingComponent.css";
import loading from "../../assets/loading.svg";

/**
 * Busy loader component for the current implementation
 *
 * @class BusyLoadingComponent
 * @extends {Component}
 */
class BusyLoadingComponent extends Component {

  /**
   * Creates an instance of BusyLoadingComponent.
   * @memberof BusyLoadingComponent
   */
  constructor() {
    super();
  }

  /**
   * Method that renders the component
   *
   * @return {*} 
   * @memberof BusyLoadingComponent
   */
  render() {
    return (
      <div className="busy-loading-container">
        <img src={loading} className="loading-logo" alt="loading-logo" />
        <h1>Estamos trabajando...</h1>
      </div>
    );
  }
}
export default BusyLoadingComponent;
