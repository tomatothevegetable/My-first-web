import React from 'react';
import { Navbar, Nav, NavDropdown, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import introductions from '../data/introduction';

class Navbar_Bootstrap extends React.Component {
  constructor(props) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange(e) {
    this.props.onLanguageChange(e.target.value);
  }
  render() {
    return (
      <Navbar bg="" expand="sm" sticky="top" >
        <Navbar.Brand as={Link} to="/">Tomato</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown alignRight title={introductions.navbarMenuTitle[this.props.language]} id="basic-nav-dropdown">
              <h5>Wesbos - JS30</h5><NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/jswork1">{introductions.titles[this.props.language].jswork1}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork2">{introductions.titles[this.props.language].jswork2}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork3">{introductions.titles[this.props.language].jswork3}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork4">{introductions.titles[this.props.language].jswork4}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork5">{introductions.titles[this.props.language].jswork5}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork6">{introductions.titles[this.props.language].jswork6}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork7">{introductions.titles[this.props.language].jswork7}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork8">{introductions.titles[this.props.language].jswork8}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork9">{introductions.titles[this.props.language].jswork9}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jswork10">{introductions.titles[this.props.language].jswork10}</NavDropdown.Item>
              <NavDropdown.Divider />
              <h5>Wesbos - Learn Redux</h5><NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Reduxstagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <ToggleButtonGroup type="radio" name="languages" defaultValue={'ch'}>
                <ToggleButton value={'ch'} onChange={this.handleLanguageChange}>中</ToggleButton>
                <ToggleButton value={'en'} onChange={this.handleLanguageChange}>EN</ToggleButton>
              </ToggleButtonGroup>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar_Bootstrap;