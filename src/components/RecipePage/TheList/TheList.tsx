import React, { useEffect, useContext, useState } from "react";
import {
  getRecipes,
  deleteRecipe,
} from "../../../middleware/recipe.middleware";
import { RecipeContext } from "../../../contexts/RecipeContext";
import { ELEMENT_TXT } from "../../../constants/recipe.const";
import { Recipes } from "../../../types/recipe.type";
import Pagination from "./Pagination";

import "./TheList.style.scss";

export interface TheListProps {}

export function handleCurrenPage(
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) {
  return (param: number) => {
    setCurrentPage(param);
  };
}

export function handleDelete(
  dispatch: React.Dispatch<any>,
  id: number,
  currentPage: number,
  totalPages?: number,
  recipes?: Recipes[]
) {
  return (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    deleteRecipe(dispatch, id, currentPage, totalPages, recipes);
  };
}

const TheList: React.FC<TheListProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { recipeState, dispatch } = useContext(RecipeContext);

  const { result, status } = recipeState;

  useEffect(() => {
    getRecipes(dispatch, currentPage, undefined);
  }, [dispatch, currentPage]);

  if (status === "done") {
    const { recipes, totalPages } = result;

    return (
      <div className="list-wrapper">
        {recipes.map((item, index) => (
          <div className="item shadow-lg p-4 rounded-lg" key={index}>
            <h3 className="tracking-wide text-gray-700 mt-2">{item.title}</h3>
            <p className="text-gray-500 my-1">{item.description}</p>
            <button
              className="button-style"
              onClick={handleDelete(
                dispatch,
                item.id,
                currentPage,
                undefined,
                recipes
              )}
            >
              {ELEMENT_TXT.DELETE_BUTTON}
            </button>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleCurrenPage={handleCurrenPage(setCurrentPage)}
        />
      </div>
    );
  }

  return null;
};

export default TheList;
