import { AssuredWorkloadSharp } from "@mui/icons-material";
import React, {useState} from "react";
// import './AddRecipe.css'
// import './Form.css'

function AddRecipe({setRecipes, recipes, setCurrentRecipe}) {

    const [formData, setFormData] = useState({
        name: "",
        link: "",
        image_url: "",
        category_id: "",
        errors: {}
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }

      function handleSubmit(event) {
          event.preventDefault();
          fetch("http://localhost:9292/recipes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              link: formData.link,
              image_url: formData.image_url,
              category_id: formData.category_id,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json()
              .then((recipe) => {
                recipes.unshift(recipe)
                setRecipes([...recipes])
                setCurrentRecipe(recipe)
                setFormData({
                    name: "",
                    link: "",
                    image_url: "",
                    category: "",
                    errors: {}
                  })
              });
            } else {
                console.log("mega problem")
            }
          });
      }

    return (
        <div className="add-recipe-form-box">
          <h3>Add Recipe</h3>
          <form className="sell-car-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="recipe name" value={formData.name} onChange={handleChange} />
            <input type="text" name="link" placeholder="link" value={formData.link} onChange={handleChange}/>
            <input type="url" name="image_url"  placeholder="image" value={formData.image_url} onChange={handleChange}/>
            <input type="text" name="category_id"  placeholder="category" value={formData.category} onChange={handleChange}/>
            <input type="submit" name="add-recipe-listing-btn" value="Add Recipe"/>
          </form>
        </div>
      );
    }

export default AddRecipe;