import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import Rating from "@mui/material/Rating";

export default function Recipe(props) {
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
            <Rating name="read-only" value="5" readOnly />
          </Row>

          <Button variant="success" href={`/recipe/${props.recipe._id}`}>
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
