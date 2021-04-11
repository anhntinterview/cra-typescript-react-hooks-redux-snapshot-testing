import React from "react";

export type Ingredients = {
  name: string;
  amount: number;
  unit: string;
}

export type Recipes = {
  id: number;
  title: string;
  description: string;
  created: string;
  modified: string;
  ingredients: Array<Ingredients>;
}

export type RecipesResponseData = {
  currentPage: number;
  totalPages: number;
  recipes: Array<Recipes>
}

export interface RecipeState {
  isLoaded: boolean;
  result: RecipesResponseData;
  params: string;
  status: string;
  err: string;
}

export interface RecipeContext {
  state: RecipeState;
  dispatch: React.Dispatch<any>;
};

export type Props =
  | {
      children: (x: number) => React.ReactNode;
    }
  | {
      children: React.ReactNode;
    };

export interface RecipeAction extends RecipeState {
  type: string;
}
