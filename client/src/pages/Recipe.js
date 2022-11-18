import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

export default function Recipe(props) {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.recipe.image} />
        <Card.Body>
          <Card.Title>{props.recipe.name}</Card.Title>

          <Button variant="primary" href={`/recipe/${props.recipe._id}`}>Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
