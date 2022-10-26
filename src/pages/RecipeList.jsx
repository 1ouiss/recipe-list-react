import FormRecipe from "../components/FormRecipe";
import { useState, useEffect } from "react";
import CardRecipe from "../components/CardRecipe";
import { useParams } from "react-router-dom";
import SearchRecipe from "../components/SearchRecipe";

const RecipeList = () => {
    const pseudo = useParams().pseudo;
    const [recipes, setRecipes] = useState([]);

    const getLocalStorage = () => {
        const recipesLocalStorage = JSON.parse(localStorage.getItem(pseudo));
        if (recipesLocalStorage) {
            setRecipes(recipesLocalStorage);
        }
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

    return (
        <div>
            <h1>Hello {pseudo}</h1>
            <FormRecipe pseudo={pseudo} recipes={recipes} setRecipes={setRecipes}/>
            <SearchRecipe recipes={recipes} setRecipes={setRecipes}/>
            <ul>
                {recipes.map((recipe, index) => {
                    if (recipe.pseudo === pseudo) {
                        return <CardRecipe key={index} recipe={recipe}/> 
                    }
                })}
                
            </ul>
        </div>
     );
}
 
export default RecipeList;