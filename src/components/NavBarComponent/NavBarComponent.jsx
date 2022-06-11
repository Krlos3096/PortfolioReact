import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Styles from "./NavBarComponent.module.css";

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
      options: ["Home", "Experiencia", "Estudios", "Habilidades"],
      anchorElNav: null,
    };
    this.updateActiveElement = this.updateActiveElement.bind(this);
    this.setAnchorElNav = this.setAnchorElNav.bind(this);
    this.setActiveElement = this.setActiveElement.bind(this);
    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this);
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
  }

  /**
   * Theme to change the look and feel of the nav bar.
   *
   * @memberof NavBarComponent
   */
  darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#333;",
      },
    },
  });

  /**
   * Set the anchor element in the nav this in case the selection changes
   *
   * @param {*} value
   * @memberof NavBarComponent
   */
  setAnchorElNav = (value) => {
    this.setState({ anchorElNav: value });
  };

  /**
   * Sets the active element to update the state of the component and show it
   *
   * @param {*} value
   * @memberof NavBarComponent
   */
  setActiveElement = (value) => {
    this.updateActiveElement(this.state.options.indexOf(value));
  };

  /**
   * Handle the open nav menu when the user clicks on the menu button in the nav bar
   *
   * @param {*} event
   * @memberof NavBarComponent
   */
  handleOpenNavMenu = (event) => {
    this.setAnchorElNav(event.currentTarget);
  };

  /**
   * Handle the close nav menu when the user clicks on one option or outside the menu
   *
   * @param {*} event
   * @memberof NavBarComponent
   */
  handleCloseNavMenu = (event) => {
    this.setAnchorElNav(null);
    let element = event.currentTarget.innerText;
    this.setActiveElement(
      this.state.options.includes(element) ? element : activeElement
    );
  };

  /**
   * updates the active element so it can update the visual part
   *
   * @param {*} e
   * @memberof NavBarComponent
   */
  updateActiveElement = (id) => {
    this.props.setActiveAppElement(id);
  };

  /**
   * Method that renders the component
   *
   * @return {*}
   * @memberof NavBarComponent
   */
  render() {
    return (
      <ThemeProvider theme={this.darkTheme}>
        <AppBar
          position="static"
          sx={{ margin: "1%", width: "98%", borderRadius: "10px" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(this.state.anchorElNav)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {this.state.options.map((option) => (
                    <NavLink
                      key={option}
                      className={Styles.linked}
                      to={`/${option}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={this.handleCloseNavMenu}>
                        <Typography textAlign="center">{option}</Typography>
                      </MenuItem>
                    </NavLink>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {location.pathname.substring(1)}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {this.state.options.map((option) => (
                  <NavLink
                    key={option}
                    activeClassName={Styles.selectedLink}
                    to={`/${option}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={this.handleCloseNavMenu}
                      sx={{
                        my: 2,
                        textTransform: "unset",
                        color: "white",
                        display: "block",
                      }}
                    >
                      {option}
                    </Button>
                  </NavLink>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
}
export default withRouter(NavBarComponent);
