import React from "react";

const Recipe = () => {
  const APP_ID = "3ce0b77b";
  const APP_KEY = "0612908fab0b3d078ba4852e9864b833";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="recipe">
      <form className="search-form">
        <input type="text" className="serac-bar bg-light" />
        <button type="submit" className="search-button btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Recipe;
