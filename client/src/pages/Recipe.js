import { useState, useEffect } from "react";
import { getIdToken } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Rating from "@mui/material/Rating";
import RecipeServices from "../components/RecipeServices";
import { useParams, useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import axios from 'axios';
import useUser from "../hooks/useUser";


export default function Recipe(props) {
  const [recipeInfo, setRecipeInfo] = useState({name: null, ingredients: null, image: null, method: null, category: null, authorId: null, favoritedIds: []});
  const { user, isLoading } = useUser();
  const { recipeId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadRecipeInfo =  (recipeId, user, async() => {
      const token = user && await getIdToken(user, true);
      const response = await axios.get(`/recipe/${recipeId}`, { 
        headers: { authtoken: token },
      });
      const newRecipeInfo = response.data;
      setRecipeInfo(newRecipeInfo)
            
    });
    loadRecipeInfo();
    
  }, []);

  const handleDelete = () => {
    RecipeServices.deleteFavorite(props.recipe._id);
    setTimeout(() => navigate(0), 500);
  };

  

  return (
    <Col className="p-3">
      <Card border="dark" style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={props.recipe.image}
          style={{ width: "auto", height: "300px", overflow: "hidden" }}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{props.recipe.name}</Card.Title>
          <Row
            style={{
              position: "relative",
              left: "80px",
              paddingBottom: "10px",
            }}
          >
            <Rating name="read-only" value={5} readOnly />
          </Row>

          <Button
            variant="success"
            size="small"
            style={{ width: "7.5rem" }}
            href={`/recipe/${props.recipe._id}`}
          >
            Learn More
          </Button>
          <div style={{ paddingTop: "0.3rem" }}>
            {props.isFavorite && (
              <Button
                variant="danger"
                onClick={handleDelete}
                size="small"
                style={{ width: "7.5rem" }}
              >
                Remove <HighlightOffIcon />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
