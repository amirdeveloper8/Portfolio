import React from "react";

const RecipeDetails = (props) => {
  const { title, calories, image } = props;
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>Calories : {calories}</p>
    </div>
  );
};

export default RecipeDetails;
