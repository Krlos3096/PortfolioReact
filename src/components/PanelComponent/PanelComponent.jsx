import React, { Component } from "react";
import BusyLoadingComponent from "../BusyLoadingComponent/BusyLoadingComponent";
import ContactSection from "../ContactSection/ContactSection";
import { Route, Switch } from "react-router-dom";

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
    return (
      <main>
        <Switch>
          <Route path="/Home">
            <BusyLoadingComponent activeElement="Home" index={this.props.activeElement} />
          </Route>
          <Route path="/Experiencia">
            <BusyLoadingComponent activeElement="Experiencia" index={this.props.activeElement} />
          </Route>
          <Route path="/Estudios">
            <BusyLoadingComponent activeElement="Estudios" index={this.props.activeElement} />
          </Route>
          <Route path="/Habilidades">
            <BusyLoadingComponent activeElement="Habilidades" index={this.props.activeElement} />
          </Route>
          <Route path="*">
            <BusyLoadingComponent activeElement="Not Found" index={this.props.activeElement} />
          </Route>
        </Switch>
        <ContactSection />
      </main>
    );
  }
}
export default PanelComponent;
