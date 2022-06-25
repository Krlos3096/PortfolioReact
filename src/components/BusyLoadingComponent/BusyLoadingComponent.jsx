import React, { Component } from 'react';
import Styles from './BusyLoadingComponent.module.css';
import loading from '../../assets/loading.svg';

/**
 * Busy loader component for the current implementation
 *
 * @class BusyLoadingComponent
 * @extends {Component}
 */
class BusyLoadingComponent extends Component {
  /**
   * Creates an instance of BusyLoadingComponent.
   * @param {*} props
   * @memberof BusyLoadingComponent
   */
  constructor(props) {
    super(props);
  }

  /**
   * Method that renders the component
   *
   * @return {*} 
   * @memberof BusyLoadingComponent
   */
  render() {
    return (
      <div className={Styles.busyLoadingContainer}>
        <img src={loading} className={Styles.loadingLogo} alt="loading-logo" />
        <h1>Estamos trabajando...({this.props.activeElement})({this.props.index})</h1>
      </div>
    );
  }
}
export default BusyLoadingComponent;
