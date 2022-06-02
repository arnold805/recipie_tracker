import React from 'react'

function RecipeCard({recipe}) {

  console.log(recipe)


    return (
        <div>
        <div className="recipe" >
          <div className="recipe-body" >
            <h3 className="recipe-name">
              {recipe.name}
            </h3>
            <h5 className="recipe-link">{"$" + recipe.link}</h5>
            <img src={recipe.image_url} alt={recipe.name} style={{border: "5px solid #89CFF0", "width":"200px", "height": "200px"}}/>
          </div>
        </div>
      </div>
    )
}

export default RecipeCard;