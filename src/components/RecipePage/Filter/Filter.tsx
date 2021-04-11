import React, { useState, useCallback, useContext } from "react";
import { debounce } from "lodash";
import { searchRecipes } from "../../../middleware/recipe.middleware";
import { RecipeContext } from "../../../contexts/RecipeContext";
import { ELEMENT_TXT } from "../../../constants/recipe.const";

import "./Filter.style.scss";

export interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  const { dispatch } = useContext(RecipeContext);
  const [keyword, setKeyword] = useState<string>("");

  const debounceInput = useCallback(
    debounce((nextValue) => {
      searchRecipes(dispatch, nextValue);
    }, 1000),
    []
  );

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setKeyword(value);
    debounceInput(value);
  }

  return (
    <div className="filter-wrapper">
      <input
        type="text"
        onChange={handleInputOnChange}
        value={keyword}
        placeholder={ELEMENT_TXT.INPUT_PLACEHOLDER}
      />
    </div>
  );
};

export default Filter;
