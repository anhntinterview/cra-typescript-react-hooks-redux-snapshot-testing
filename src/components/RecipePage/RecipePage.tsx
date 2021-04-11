import * as React from "react";

import Filter from "./Filter";
import TheList from "./TheList";

import "./RecipePage.style.scss";

export interface RecipePageProps {}

const RecipePage: React.FC<RecipePageProps> = () => {
  return (
    <div className="recipe-wrapper">
      <Filter />
      <TheList />
    </div>
  );
};

export default RecipePage;
