import React, { useEffect, useState } from "react";
import Shopping from "./Shopping";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function ShoppingList() {
 
   
//  const { uid } = req.user;
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
//TODO: shopping list should be specific to the individual user
    fetch(`http://localhost:8000/shoppinglist/`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [])

  return (
    <>
    <h1>My Shopping List <ShoppingBagIcon style={{color:"green"}} fontSize="large"/></h1>
    {recipes && recipes.map((recipe) => <Shopping recipe={recipe}/>)}
    </>
  )

}
