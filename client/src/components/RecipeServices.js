const RecipeServices = {
  //delete recipe services
  delete(recipeId) {
    return fetch(`http://localhost:8000/recipe/${recipeId}`, {
      method: "DELETE",
    });
  },


  //HANDLE FAVORITE RECIPES 

  //add favorite recipe services
  addToFavorite(recipeId) {
    return fetch(`http://localhost:8000/favorite/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: recipeId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.res));
  },
//delete favorite recipes from favorite collections
  deleteFavorite(recipeId) {
    return fetch(`http://localhost:8000/favorite/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: recipeId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.res));
  },

  //HANDLE SHOPPINGLIST
  //add favorite recipe services
  addToShoppingList(recipeId) {
    return fetch(`http://localhost:8000/shoppinglist/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: recipeId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.res));
  },

  //remove shoppinglist recipes from shopping collections
  completeShopping(recipeId) {
    return fetch(`http://localhost:8000/shoppinglist/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: recipeId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.res));
  },

};
export default RecipeServices;
