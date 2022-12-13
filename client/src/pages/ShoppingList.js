import React, { useEffect, useState } from "react";
import Shopping from "./Shopping";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { getIdToken } from "firebase/auth";
import useUser from "../hooks/useUser";
import axios from "axios";

export default function ShoppingList() {
 
   const { user, isLoading } = useUser();
  const [recipes, setRecipes] = useState(null);
  useEffect(async () => {
//TODO: shopping list should be specific to the individual user
    const token = (user && await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const response = await axios.get(`http://localhost:8000/shoppinglist/:${user.name}`, { headers })
    .then((res) => res.json())
        .then((data) => setRecipes(data));
    }, []);

  return (
    <>
    <h1>My Shopping List <ShoppingBagIcon style={{color:"green"}} fontSize="large"/></h1>
    {recipes && recipes.map((recipe) => <Shopping recipe={recipe}/>)}
    </>
  )

}
