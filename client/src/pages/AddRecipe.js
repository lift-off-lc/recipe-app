import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

export default function AddRecipe() {
  return (
    
      <div class="container" >
        
        <h1> <Badge pill bg ="dark">Add new recipe</Badge></h1>
        <div class="col-md-5 col-md-offset-1" >
          <form role="form" id="floating-label" style={{position:"relative", left:"380px",paddingBottom:"10px"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Recipe name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categories</Form.Label>
              <Form.Control type="text" placeholder="Food Category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="url" placeholder="https://example.com" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ingredients</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Method</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    
  );
}
