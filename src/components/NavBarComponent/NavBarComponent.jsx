import React, { Component } from "react";
import Styles from "./NavBarComponent.module.css";
import NavBarItem from "../NavBarItem/NavBarItem";

/**
 * Navigation bar component
 *
 * @class NavBarComponent
 * @extends {Component}
 */
class NavBarComponent extends Component {
  /**
   * Creates an instance of NavBarComponent.
   * @memberof NavBarComponent
   */
  constructor() {
    super();
    this.state = {
      options: ["Home", "Experiencia", "Estudios", "Habilidades", "Contacto"],
      activeElement: 0,
    };
  }

  /**
   * updates the active element so it can update the visual part
   *
   * @param {*} e
   * @memberof NavBarComponent
   */
  updateActiveElement = (id) => {
    this.setState({ activeElement: id });
  };

  /**
   * Method that renders the component
   *
   * @return {*}
   * @memberof NavBarComponent
   */
  render() {
    return (
      <ul className={Styles.horizontal}>
        {this.state.options.map((name, id) => (
          <NavBarItem
            key={id}
            id={id}
            name={name}
            setActiveElement={this.updateActiveElement}
            isActive={id == this.state.activeElement}
          />
        ))}
      </ul>
    );
  }
}
export default NavBarComponent;
