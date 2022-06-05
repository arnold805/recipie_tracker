import React from "react";
import TextField from '@mui/material/TextField';

function Search({handleRecSearch}) {

  return (
    <div className="searchbar" style={{ display: "flex", justifyContent: "center", alignItems: "center",}} >
      <TextField id="standard-basic" label="search recipes" variant="standard" onChange={handleRecSearch} />
    </div>
  )
}

export default Search;