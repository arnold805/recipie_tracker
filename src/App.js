import React, { useState, useEffect } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import RecipeCard from "./components/RecipeCard";
import Search from "./components/Search";
import AddRecipe from "./components/AddRecipe"
import MediaCard from "./components/MediaCard";
import { Button } from "@mui/material";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [currentRecipe, setCurrentRecipe] = useState(undefined)

  function handleRecSearch(e) {
    if (e.target.value !== undefined) {
      const filteredRec = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) 
          ||
          recipe.link.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFilteredRecipes(filteredRec);
    }
    else {
      setFilteredRecipes(recipes);
    }
  }
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const URL = "http://localhost:9292/recipes";
  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      // .then(data => console.log(data))
      .then((data) => setRecipes(data));
  }, []);


  const delete_recipe = function(recipe) {
    console.log(recipe)
    fetch(`http://localhost:9292/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(setRecipes(recipes.filter((item) => item.name !== recipe.name)));
      }

  return (
    <div className="App">
      <Appbar />
      <AddRecipe recipes={recipes} setFilteredRecipes={setFilteredRecipes} setCurrentRecipe={setCurrentRecipe} setRecipes={setRecipes}/>
      <Search handleRecSearch={handleRecSearch} />
      {filteredRecipes.map((recipe) => {
        return <RecipeCard delete_recipe={delete_recipe} recipe={recipe}  />;
      })}
    </div>
  );
}

export default App;
