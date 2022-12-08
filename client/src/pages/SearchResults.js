import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Recipe from "./Recipe";
import Row from "react-bootstrap/esm/Row";






export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
   

    
        function fetchData() {
            fetch(`http://localhost:8000/search?searchTerm=${searchTerm}`)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    setSearchResults(data);
                    console.log(data);
                });
        }

    return (
        <>
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}   
        />
            <Button onClick={() => { fetchData() } }>
                    Search
                </Button>
         
              <Row>  
                {searchResults && searchResults.map((recipe) => <Recipe key={recipe.name} recipe={recipe} />)}
             </Row>
        

       
        </>  
          
    ) 
   
}
