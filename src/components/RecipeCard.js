import React, {useEffect, useState} from 'react'
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

function RecipeCard({recipe, delete_recipe}) {

    return (
        <div>
        <div className="recipe" 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="recipe-body">
            <h3 className="recipe-name">
              {recipe.name}
            </h3>
            <h5 className="recipe-link">
              <a href ={recipe.link} target="_blank">
              {recipe.link}
              </a>
            </h5>
            <Button onClick={() => delete_recipe(recipe)} variant="contained">Remove</Button>
            <img src={recipe.image_url} alt={recipe.name} style={{border: "5px solid #89CFF0", "width":"200px", "height": "200px"}}/>
          </div>
        </div>
      </div>
    )
}

export default RecipeCard;