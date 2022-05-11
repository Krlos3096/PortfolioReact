import React, { Component } from "react";
import "./NavBarComponent.css";
import home from "../../assets/home.svg";

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
    this.myRef = React.createRef();
    this.options = ["Experiencia", "Estudios", "Habilidades", "Contacto"];
  }

  /**
   * Method that cleans the active class of the li elements of the component
   *
   * @memberof NavBarComponent
   */
  cleanActive = () => {
    [...this.myRef.current.children].forEach((li) => {
      li.classList.remove("active");
    });
  };

  /**
   * Handler for the click event on the ul element of the component
   *
   * @param {*} e
   * @memberof NavBarComponent
   */
  clickHandler = (e) => {
    this.cleanActive();
    e.target.parentElement.classList.add("active");
  };

  /**
   * Method that renders the component
   *
   * @return {*} 
   * @memberof NavBarComponent
   */
  render() {
    return (
      <ul className="horizontal" onClick={this.clickHandler} ref={this.myRef}>
        <li key="Home"className="home active">
          <img src={home} />
        </li>
        {this.options.map((o) => (
          <li key={o}>
            <a>{o}</a>
          </li>
        ))}
      </ul>
    );
  }
}
export default NavBarComponent;
