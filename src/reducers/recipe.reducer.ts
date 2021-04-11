import { SET_RECIPE } from "../actions/recipe.actions";
import { RecipeState, RecipeAction } from "../types/recipe.type";

export default function reducer(state: RecipeState, action: RecipeAction) {
  switch (action.type) {
    case SET_RECIPE.REQ_RECIPE:
      return {
        ...state,
        isLoaded: false,
        params: action.params,
        status: "pending",
      };
    case SET_RECIPE.REQ_RECIPE_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        result: action.result,
        status: "done",
        err: "none",
      };
    case SET_RECIPE.REQ_RECIPE_FAIL:
      return {
        ...state,
        isLoaded: false,
        err: action.err,
        status: "fail",
      };
    case SET_RECIPE.REQ_DELTE_RECIPE_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        result: action.result,
        status: "done",
        err: "none",
      };
    case SET_RECIPE.REQ_DELTE_RECIPE_FAIL:
      return {
        ...state,
        isLoaded: false,
        err: action.err,
        status: "fail",
      };
    default:
      return state;
  }
}
