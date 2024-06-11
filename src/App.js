import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
    const createRecipe = (recipe) =>
        setRecipes((recipes) => [
            ...recipes,
            recipe,
        ]);
    const deleteRecipe = (indexToDelete) =>
        setRecipes((currentRecipe) =>
            recipes.filter((recipe, index) => index !== indexToDelete)
        );
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={deleteRecipe} />
      <RecipeCreate  createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
