import FormConnect from './pages/FormConnect';
import RecipeList from './pages/RecipeList';
import { useState, createContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const RecipesContext = createContext();


const App = () => {
  const [recipes, setRecipes] = useState([]);


  const [pseudo, setPseudo] = useState("");
  
  return (
    <BrowserRouter>
      <RecipesContext.Provider value={{recipes, setRecipes}}>

        <Routes>
          <Route path="/" element={<FormConnect pseudo={pseudo} setPseudo={setPseudo}/>}/>
          <Route path="/recipes/:pseudo" element={<RecipeList/>}/>
        </Routes>

      </RecipesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
