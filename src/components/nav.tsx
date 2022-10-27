import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class nav extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="p-3" fixed="top" bg="light">
          <Navbar.Brand href="/">Fancy Name</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar>
        <div style={{ height: "72px" }}></div>
      </React.Fragment>
    );
  }
}
