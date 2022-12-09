import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import useUser from "../hooks/useUser";
function NavBar() {
  
   const { user, isLoading} = useUser();
   const [linkToFavorite, setLinkToFavorite] = useState("/login")
   const [linkToShop, setLinkToShop] = useState("/login");
  if(user) {
      setLinkToFavorite("/favoriterecipe");
      setLinkToShop("/shoppinglist")
  }
  
  return (
  
      
  
    <Navbar bg="light" expand="lg" style={{ maxHeight: "50px" }}>
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
                <NavDropdown.Item  href={linkToFavorite}>
                  My Favorites <FavoriteBorderTwoToneIcon fontSize="small" />
                </NavDropdown.Item>
                <NavDropdown.Item href="/addrecipe">
                Add Recipe <FavoriteBorderTwoToneIcon fontSize="small" />
              </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href={linkToShop}>Shopping List <ShoppingCartOutlinedIcon fontSize="small"/></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 h-auto w-auto"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            { user ?
//TODO: create log out function
            //   <Nav>
            //   <Nav.Link href="/logout">Log Out</Nav.Link>
            // </Nav>
              <Nav>
                <Nav.Link href="/login">LOG OUT</Nav.Link>
              </Nav>
              :
              <Nav>
                <Nav.Link href="/login">SIGN IN</Nav.Link>
              </Nav>
            }

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}

export default NavBar;
