import React, { userState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  CiUser,
  CiLaptop,
  CiMail,
  CiCircleList,
} from "react-icons/ci";

const iconStyling = {
  margin: "0 5 3 0",
};

export const Heading = ({ currentPage, handlePageChange }) => {
  const [expand, handleExpand] = userState(false);
  const handleClick = (page) => {
    handlePageChange(page);
    handleExpand(false);
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md">
      <Container>
        <Navbar.Brand href="#" className="d flex text-light">
          James Matsushita
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-menu"
          onClick={() => {
            handleExpand(expand ? false : "expanded");
          }}
        >

        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "About" ? "nav-link yellow" : "nav-link"
                }
                href="#about"
                onClick={() => handleClick("About")}
              >
                <CiUser style={iconStyling} />
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "Project" ? "nav-link yellow" : "nav-link"
                }
                href="#project"
                onClick={() => handleClick("Project")}
              >
                <CiLaptop style={iconStyling} />
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "Contact" ? "nav-link yellow" : "nav-link"
                }
                href="#contact"
                onClick={() => handleClick("contact")}
              >
                <CiMail style={iconStyling} />
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "Skills" ? "nav-link yellow" : "nav-link"
                }
                href="#skills"
                onClick={() => handleClick("Skills")}
              >
                <CiCircleList style={iconStyling} />
                Skills
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};