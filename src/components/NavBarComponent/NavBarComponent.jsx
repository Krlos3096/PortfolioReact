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
   * @param {*} props
   * @memberof NavBarComponent
   */
  constructor(props) {
    super(props);
    this.state = {
      options: ["Home", "Experiencia", "Estudios", "Habilidades"]
    };
  }

  /**
   * updates the active element so it can update the visual part
   *
   * @param {*} e
   * @memberof NavBarComponent
   */
  updateActiveElement = (id) => {
    this.props.setActiveAppElement(id)
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
            isActive={id == this.props.activeElement}
          />
        ))}
      </ul>
    );
  }
}
export default NavBarComponent;
