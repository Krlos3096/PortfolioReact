import React, { Component } from "react";
import Styles from "./PanelComponent.module.css";
import BusyLoadingComponent from "../BusyLoadingComponent/BusyLoadingComponent";
import ContactSection from "../ContactSection/ContactSection";

/**
 * PanelComponent definition
 *
 * @class PanelComponent
 * @extends {Component}
 */
class PanelComponent extends Component {

  /**
   * Creates an instance of PanelComponent.
   * @memberof PanelComponent
   */
  constructor(props) {
    super(props);
  }

  /**
   * Method that renders the component
   *
   * @return {*} 
   * @memberof PanelComponent
   */
  render() {
    return <div className={Styles.container}>
      <BusyLoadingComponent visible={this.props.activeElement != 4}/>
      <ContactSection visible={this.props.activeElement == 4}/>
    </div>;
  }
}
export default PanelComponent;
