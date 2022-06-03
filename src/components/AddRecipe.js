import React, {useState} from "react";
// import './AddRecipe.css'
// import './Form.css'

function SellCar() {
    const [formData, setFormData] = useState({
        name: "",
        link: "",
        image_url: "",
        category_id: "",
        errors: {}
      });
    
      // 
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }
      // 

    //   const validateForm = errors => {
    //     let valid = true;
    //     Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    //     return valid;
    //   };


    //   handleChange = (event) => {
    //     event.preventDefault();
    //     setFormData({
    //       ...formData,
    //       [event.target.name]: event.target.value,
    //     })
    //     let errors = this.formData.errors;
    //     const { name, value } = event.target;
    
    //     switch (value) {
    //       case 'type': 
    //         errors.type = 
    //           value.length < 0
    //             ? 'add vehicle type!'
    //             : '';
    //         break;
    //       case 'make': 
    //         errors.make = 
    //           value.length < 0
    //             ? ''
    //             : 'add vehicle make!';
    //         break;
    //       case 'model': 
    //         errors.model = 
    //           value.length < 0
    //             ? 'add vehicle model!'
    //             : '';
    //         break;
    //         case 'condition': 
    //         errors.model = 
    //           value.length < 0
    //             ? 'add vehicle condition!'
    //             : '';
    //         break;
    //         case 'price': 
    //         errors.model = 
    //           value.length < 0
    //             ? 'add vehicle price!'
    //             : '';
    //         break;
    //         case 'image': 
    //         errors.model = 
    //           value.length < 0
    //             ? 'add vehicle image!'
    //             : '';
    //         break;
    //       default:
    //         break;
    //     }
    
    //     this.setFormData({errors, [name]: value});
    //   }
    
    //   function checkSellInput(formData) {
    //     return type === "" && make === "" && model === "" && condition === "" && price === "" && image === ""
    //   }

      function handleSubmit(event) {
        // checkSellInput(formData);
        event.preventDefault(event);
        // if(validateForm(this.formData.errors)) {
        //   console.info('Valid Form')
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
          });
        // }
        // else{
        //   console.error('Invalid Form')
        // }
        console.info('end of POST')
      }

    return (
        <div className="add-recipe-form-box">
          <h3>Add Recipe</h3>
          <form className="sell-car-form" onSubmit={handleSubmit}>
            <input type="text" name="recipe-name" placeholder="recipe name" value={formData.name} onChange={handleChange} />
            <input type="text" name="link" placeholder="link" value={formData.link} onChange={handleChange}/>
            <input type="text" name="image-url"  placeholder="image url" value={formData.image_url} onChange={handleChange}/>
            <input type="text" name="category"  placeholder="category" value={formData.category} onChange={handleChange}/>
            <input type="submit" name="add-recipe-listing-btn" value="Add Recipe"/>
          </form>
        </div>
      );
    }

export default SellCar;