import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function NavBar() {
  return (
    <Navbar className="bg-primary border border-primary" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-light" href="/">RECIPE APP</Navbar.Brand>
        <Navbar.Toggle className="text-secondary" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-secondary"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-secondary" href="/">Home </Nav.Link>
            <Nav.Link className="text-secondary" href="/recipe">All Recipes</Nav.Link>
            <NavDropdown className="color-secondary" title="Manage Recipe" id="navbarScrollingDropdown">
              <NavDropdown.Item className="text-primary" href="/favoriterecipe">
                My Favorites <FavoriteBorderTwoToneIcon className="text-primary" fontSize="small" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-primary" href="/addrecipe">Add Recipe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-secondary"href="/shoppinglist">Shopping List <ShoppingCartOutlinedIcon fontSize="small"/></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-white text-secondary">Search</Button>
            <Nav>
              <Nav.Link className="text-secondary" href="/login">LOGIN</Nav.Link>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
