import { RecipeState } from "../types/recipe.type";

export const initRecipeState: RecipeState = {
  isLoaded: false,
  result: {
    currentPage: 1,
    totalPages: 5,
    recipes: [],
  },
  params: "",
  status: "",
  err: "",
};
