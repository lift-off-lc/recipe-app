import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Recipe from "./Recipe";
// import RecipeList from "./RecipeList";


export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState(null)
    const getResults = () => {
        searchResults(recipes.map((recipe)=> recipe.includes(searchTerm))
    }
    
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch("http://localhost:8000/recipe", {params: {key: searchTerm}});
    //         console.log(res.body);
    //         setSearchResults(res.body.searchTerm);

    //     }
        // const search = async () => {
        //     try {
        //         if (!searchTerm.trim()) {
        //             setSearchResults([])
        //             return
        //         }
        //             // figure out if I need params or not
        //         const res = await fetch("http://localhost:8000/recipe", {params: {key: searchTerm }});
        //         setSearchResults(res.data) //maybe this should be res.data.includes(searchTerm)
        //         console.log(res);
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
    //     fetchData()
    // },[searchTerm])

    useEffect(() => {
        fetch("http://localhost:8000/recipe")
          .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, [recipes]);
    
    

    return (
        <>
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}   
        />
                <input type="submit" onSubmit={getResults(Form.value)} />
        </Form>
            {searchResults && searchResults.length > 0 && (
                  <row>  
                     <searchResults />
                 </row>
            
            
            )}
           
        </>
    ) 

}