import React, { Component } from "react";
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
    return <main>
      <BusyLoadingComponent visible={this.props.activeElement != 4} activeElement={this.props.activeElement}/>
      <ContactSection/>
    </main>;
  }
}
export default PanelComponent;
