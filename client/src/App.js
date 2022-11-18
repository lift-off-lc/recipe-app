import "./App.css";
import NotFound from "./pages/NotFound";
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="page.body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/recipe" element={<RecipeList />} />
            <Route path="/login" element={<Login />} />
            // * prefer to render to other path that did not listed above
            <Route path="*" element={<NotFound />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
