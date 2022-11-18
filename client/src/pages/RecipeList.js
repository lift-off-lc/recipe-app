import React, { useEffect, useState } from "react";

import Recipe from "./Recipe";
export default function RecipeList() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [recipes]);

  return (
    <>
      <h1>Recipe</h1>
      <div>
        {recipes && recipes.map((recipe) => <Recipe recipe={recipe} />)}
      </div>
    </>
  );
}
