import React from "react";
import "./RecipeView.css";

function RecipeView( {recipe,RecipeDelete,index} ) {

    const imgStyle = {
        maxWidth: "100%",
        maxHeight: "100px",
    }

     return (

      <tr className="recipe"  alt="recipe image">
          <td alt="recipe name">{recipe.name} </td>
          <td alt="recipe cuisine">{recipe.cuisine}</td>
          <td><img role='img' alt="recipe photo" src={recipe.photo} style={imgStyle} /></td>
          <td alt="recipe ingredients">{recipe.ingredients}</td>
          <td alt="recipe preparation">{recipe.preparation}</td>
          <td alt="delete button">
              <button name="delete" onClick={RecipeDelete}>
                  Delete
              </button>
          </td>
      </tr>
            );


}

export default RecipeView;
