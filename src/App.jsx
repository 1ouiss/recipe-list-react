import FormConnect from './components/FormConnect';
import RecipeList from './components/RecipeList';
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [pseudo, setPseudo] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormConnect isConnected={isConnected} setIsConnected={setIsConnected} pseudo={pseudo} setPseudo={setPseudo}/>}/>
        <Route path="/recipes/:pseudo" element={<RecipeList/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {isConnected ? <RecipeList pseudo={pseudo}/> : <FormConnect setIsConnected={setIsConnected} pseudo={pseudo} setPseudo={setPseudo}/>}
    // </div>
  );
}

export default App;
