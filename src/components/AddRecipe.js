import React, {useState} from "react";
// import './AddRecipe.css'
// import './Form.css'
// import TextField from '@mui/material/TextField';
import { Button, TextField } from '@mui/material';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function AddRecipe({setRecipes, recipes}) {

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
                setFormData({
                    name: "",
                    link: "",
                    image_url: "",
                    category_id: "",
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
            <TextField id="standard-basic" type="text" name="name" label="recipe name" variant="standard" value={formData.name} onChange={handleChange} />
            <TextField id="standard-basic" type="text" name="link" label="link" variant="standard" value={formData.link} onChange={handleChange} />
            <TextField id="standard-basic" type="url" name="image_url" label="image url" variant="standard" value={formData.image_url} onChange={handleChange} />
            <TextField id="standard-basic" type="text" name="category_id" label="category" variant="standard" value={formData.category_id} onChange={handleChange} />
            <Button onClick={handleSubmit} variant="contained">Add Recipe</Button>
        </div>
      );
    }

export default AddRecipe;