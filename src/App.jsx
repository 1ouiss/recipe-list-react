import FormConnect from './components/FormConnect';
import RecipeList from './components/RecipeList';
import { useState } from "react";
function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [pseudo, setPseudo] = useState("");

  return (
    <div className="App">
      {isConnected ? <RecipeList pseudo={pseudo}/> : <FormConnect setIsConnected={setIsConnected} pseudo={pseudo} setPseudo={setPseudo}/>}
    </div>
  );
}

export default App;
