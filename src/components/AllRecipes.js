import React from "react";
import RecipeCard from "./RecipeCard"


function AllCars({recipes}) {

return (
    <main>
        
        <ul className="recipes">
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            }
          )
       }
        </ul>
    </main>
  )
}

export default AllCars