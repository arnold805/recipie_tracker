import React from "react";

function Search({handleRecSearch}) {

  
    return (
        <div className="searchbar">
          <label htmlFor="search">Search Recipes</label>
          <input
            type="text"
            id="search"
            placeholder="Search for a recipe name or category..."
            onChange={handleRecSearch}
          />
        </div>
    )
}

export default Search;