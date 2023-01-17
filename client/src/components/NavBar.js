import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "../pages/SearchResults";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material-next/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";


function NavBar() {
  const {user, isLoading} = useUser();
  const navigate=useNavigate();
  const logOut = () => {
    signOut(getAuth());
    navigate('/')
}
  return (
    <>
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
                {
                  user 
                    ? <NavDropdown.Item href="/favoriterecipe">My Favorites<FavoriteBorderTwoToneIcon fontSize="small" /></NavDropdown.Item> 
                    : <NavDropdown.Item href="/login">My Favorites<FavoriteBorderTwoToneIcon fontSize="small" /></NavDropdown.Item>
                }
                <NavDropdown.Divider />
                {
                  user
                    ? <NavDropdown.Item href="/addrecipe">Add Recipe</NavDropdown.Item>
                    : <NavDropdown.Item href='/login'>Add Recipe</NavDropdown.Item>
                }
              </NavDropdown>
              <Nav.Link href="/shoppinglist">
                Shopping List <ShoppingCartOutlinedIcon fontSize="small" />
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/grocery">
                {" "}
                Grocery Location <PlaceIcon />{" "}
              </Nav.Link>
              {
                user
                ? <Button color="success" size="small" variant="outlined" className="me-auto my-2 my-lg-0" onClick={logOut}>Sign Out</Button>
                : <Button color="secondary" size="small" variant="outlined" href="/login" className="me-auto my-2 my-lg-0"><AccountCircleIcon fontSize="large" /></Button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Search />
    </>
  );
}

export default NavBar;
