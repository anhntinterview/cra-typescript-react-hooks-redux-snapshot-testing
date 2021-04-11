import React, { useReducer } from "react";
import { RecipeContext } from "./RecipeContext";
import recipeReducer from "../reducers/recipe.reducer";
import { initRecipeState } from "../state/recipe.state";

const RecipePageProvider: React.FC = ({ children }) => {
  const [recipeState, dispatch] = useReducer(recipeReducer, initRecipeState);
  return (
    <RecipeContext.Provider value={{ recipeState, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipePageProvider;
