import { useContext, Dispatch, createContext } from "react";
import { initRecipeState } from "../state/recipe.state";
import { RecipeState } from "../types/recipe.type";

export const RecipeContext = createContext<{
  recipeState: RecipeState;
  dispatch: Dispatch<any>;
}>({
  recipeState: initRecipeState,
  dispatch: () => null,
});
export const useRecipeContext = () => useContext(RecipeContext);
