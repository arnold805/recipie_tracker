import * as ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from "@mui/material";
import App from '../App';

function RecipeCard({recipe, delete_recipe}) {

    return (
        <div>
        <div className="recipe" >
          <div className="recipe-body" >
            <h3 className="recipe-name">
              {recipe.name}
            </h3>
            <h5 className="recipe-link">
              <a href ={recipe.link} target="_blank">
              {recipe.link}
              </a>
            </h5>
            <img src={recipe.image_url} alt={recipe.name} style={{border: "5px solid #89CFF0", "width":"200px", "height": "200px"}}/>
          </div>
          <Button onClick={() => delete_recipe(recipe)} variant="contained">Remove</Button>
        </div>
      </div>
    )
}

export default RecipeCard;