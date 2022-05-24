import React, { Component } from "react";
import Styles from "./NavBarItem.module.css";
import home from "../../assets/home.svg";

/**
 * NavBarItem definition
 *
 * @class NavBarItem
 * @extends {Component}
 */
class NavBarItem extends Component {
  /**
   * Creates an instance of NavBarItem.
   * @param {*} props
   * @memberof NavBarItem
   */
  constructor(props) {
    super(props);
  }
  
  /**
   * Handler for the click event on the element of the component
   *
   * @param {*} e
   * @memberof NavBarItem
   */
  clickHandler = (e) => {
    this.props.setActiveElement(this.props.id);
  };

  /**
   * Method that renders the component
   *
   * @return {*}
   * @memberof NavBarItem
   */
  render() {
    return (
      <li onClick={this.clickHandler}
        className={`${this.props.id == 0 ? Styles.home : undefined} ${
          Styles.textBox
        } ${this.props.isActive ? Styles.active : undefined}`}
      >
        {this.props.id == 0 ? (
          <img src={home} />
        ) : (
          <a className={Styles.text}>{this.props.name}</a>
        )}
      </li>
    );
  }
}
export default NavBarItem;
