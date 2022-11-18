import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/recipe/${recipeId}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [recipe]);

  return (
    <>
      <div>RecipeDetails</div>
      {recipe && (
        <>
          <div>{recipe.name}</div>
          <div>{recipe.ingredients}</div>
          <div>{recipe.method}</div>
          <div>{recipe.category}</div>
          <img src={recipe.image} alt="No Image Found "></img>
        </>
      )}
      <div>
        {recipe?._id
          ? "This recipe has id: " + recipe._id
          : "There's no recipe for this id"}
      </div>
    </>
  );
}
