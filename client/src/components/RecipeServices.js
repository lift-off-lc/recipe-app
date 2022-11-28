const RecipeServices = {
    delete (recipeId) {
        return fetch(`http://localhost:8000/recipe/${recipeId}`, {
            method: 'DELETE'
        }) 
    },
};
export default RecipeServices
