import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">RECIPE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="/recipe">All Recipes</Nav.Link>
            <NavDropdown title="Manage Recipe" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/favoriterecipe">
                My Favorites <FavoriteBorderTwoToneIcon fontSize="small" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/addrecipe">Add Recipe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Shopping List
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav>
              <Nav.Link href="/login">LOGIN</Nav.Link>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
