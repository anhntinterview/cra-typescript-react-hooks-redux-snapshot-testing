import { Dispatch } from "react";
import { SET_RECIPE } from "../actions/recipe.actions";
import {
  getApi,
  deleteApi,
} from "../services/restful.service";
import { RECIPE_API_CONST } from "../constants/recipe.const";
import { Recipes } from "../types/recipe.type";

export const searchRecipes = async (
  dispatch: Dispatch<any>,
  keyword?: string
) => {
  dispatch({ type: SET_RECIPE.REQ_RECIPE });
  try {
    getApi(RECIPE_API_CONST(undefined, undefined, undefined, keyword).GET)
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: SET_RECIPE.REQ_RECIPE_SUCCESS, result });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (err) {
    dispatch({ type: SET_RECIPE.REQ_RECIPE_FAIL, err: err.toJSON().message });
  }
};

export const getRecipes = async (
  dispatch: Dispatch<any>,
  currentPage?: number,
  totalPage?: number
) => {
  dispatch({ type: SET_RECIPE.REQ_RECIPE });
  try {
    getApi(RECIPE_API_CONST(currentPage, totalPage, undefined).GET)
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: SET_RECIPE.REQ_RECIPE_SUCCESS, result });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (err) {
    dispatch({ type: SET_RECIPE.REQ_RECIPE_FAIL, err: err.toJSON().message });
  }
};

export const deleteRecipe = async (
  dispatch: Dispatch<any>,
  id?: number,
  currentPage?: number,
  totalPage?: number,
  recipes?: Recipes[]
) => {
  dispatch({ type: SET_RECIPE.REQ_RECIPE });
  try {
    deleteApi(RECIPE_API_CONST(undefined, undefined, id).DELETE)
      .then((response) => response.json())
      .then((result) => {
        // Handling remove item at local
        const idDeleted = result.id;
        if (idDeleted === id) {
          const newRecipes = recipes?.filter((item) => item.id !== idDeleted);
          const newResult = {
            currentPage,
            totalPage,
            recipes: newRecipes,
          };
          dispatch({
            type: SET_RECIPE.REQ_DELTE_RECIPE_SUCCESS,
            result: newResult,
          });
        } else {
          console.log("ID was not matched. Maybe deleted wrong!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (err) {
    dispatch({
      type: SET_RECIPE.REQ_DELTE_RECIPE_FAIL,
      err: err.toJSON().message,
    });
  }
};
