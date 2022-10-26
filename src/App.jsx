import FormConnect from './components/FormConnect';
import RecipeList from './components/RecipeList';
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [pseudo, setPseudo] = useState("");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormConnect pseudo={pseudo} setPseudo={setPseudo}/>}/>
        <Route path="/recipes/:pseudo" element={<RecipeList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
