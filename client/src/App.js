import "./App.css";
import { AuthProvider } from "./components/Firebase/context/AuthContext";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecipeDetails from "./pages/RecipeDetails";
import Footer from "./components/Footer";
import AddRecipe from "./pages/AddRecipe";
import FavoriteRecipe from "./pages/FavoriteRecipe";
import ShoppingList from "./pages/ShoppingList";
import GroceryLocation from "./pages/GroceryLocation";
import ErrorMessage from "./components/Firebase/layouts/ErrorMessage";
import Profile from "./pages/Profile";
import WithPrivateRoute from "./components/Firebase/utils/WithPrivateRoute";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    
      <div className="App">
        <NavBar />
        
        <div className="page.body">
        <ErrorMessage/>    
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/recipe" element={<RecipeList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/favoriterecipe" element={<FavoriteRecipe />} />
            <Route path="/shoppinglist" element={<ShoppingList />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/grocery" element={<GroceryLocation />} />
            <Route 
              exact 
              path="/profile" 
              element={
                <WithPrivateRoute>
                  <Profile />
                </WithPrivateRoute>
              } />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
