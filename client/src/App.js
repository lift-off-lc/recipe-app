import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
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
import NotFoundPage from "./pages/NotFoundPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page.body">
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
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/resetpassword" element={<ResetPasswordPage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
