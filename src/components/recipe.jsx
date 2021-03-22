import React from "react";
import { howR } from "../services/recipeHowTo";

const Recipe = () => {
  const howRecipe = howR();

  return (
    <div className="recipe">
      <div className="header-recipe">
        <img src="./images/lime-salmon.jpeg" alt="" />
        <h1>Recipe App</h1>
        <form className="search-form">
          <input type="text" className="serac-recipe" />
          <button type="submit" className="search-button-recipe">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="container recipe-details">
        <div className="row">
          {howRecipe.map((how) => (
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="recipe-box">
                <img src={how.image} alt={how.title} />
                <h5>{how.title}</h5>
                <div>{how.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
