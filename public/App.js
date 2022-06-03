import React, { useState, useEffect } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import RecipeCard from "./components/RecipeCard";
import Search from "./components/Search";
import MediaCard from "./components/MediaCard";
import { Button } from "@mui/material";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  function handleRecSearch(e) {
    if (e.target.value !== undefined) {
      const filteredRec = recipes.filter((recipe) => {
      // debugger
        return (
          recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) 
          // ||
          // recipe.category.toLowerCase().includes(e.target.value.toLowerCase())
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

  return (
    <div className="App">
      <Appbar />
      <Search handleRecSearch={handleRecSearch} />
      {/* <MediaCard /> */}
      {filteredRecipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
}

export default App;
