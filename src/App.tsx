import React from "react";
import RecipeProvider from "./contexts/RecipeProvider";
import RecipePage from "./components/RecipePage";
import "./App.style.scss";

function App() {
  return (
    <div className="container">
      <RecipeProvider>
        <RecipePage />
      </RecipeProvider>
    </div>
  );
}

export default App;
