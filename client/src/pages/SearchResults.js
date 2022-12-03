import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Recipe from "./Recipe";
import Button from "react-bootstrap/Button";
// import RecipeList from "./RecipeList";


export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([])
    const getResults = () => {
        setSearchResults(recipes.map((recipe)=> recipe.includes(searchTerm)))
    }
    
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch("http://localhost:8000/recipe", {params: {key: searchTerm}});
    //         console.log(res.body);
    //         setSearchResults(res.body.searchTerm);

    //     }
    //     const search = async () => {
    //         try {
    //             if (!searchTerm.trim()) {
    //                 setSearchResults([])
    //                 return
    //             }
    //                 // figure out if I need params or not
    //             const res = await fetch("http://localhost:8000/recipe", {params: {key: searchTerm }});
    //             setSearchResults(res.data) //maybe this should be res.data.includes(searchTerm)
    //             console.log(res);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // },[searchTerm])

    function fetchData() {
        fetch(`http://localhost:8000/search?searchTerm=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => setSearchResults(data));      
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
                <Button onClick={() => { fetchData() }}>
                    Search
                </Button>
            {searchResults && searchResults.length > 0 && (
                  <row>  
                     <searchResults />
                 </row>
            
            
            )}
           
        </>
    ) 

}