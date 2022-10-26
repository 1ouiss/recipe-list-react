import FormRecipe from "./FormRecipe";
import { useState, useEffect } from "react";
import CardRecipe from "./CardRecipe";
import { useParams } from "react-router-dom";

const RecipeList = () => {
    const pseudo = useParams().pseudo;
    const [recipes, setRecipes] = useState([]);

    const handleChangeSearch = (e) => {
        const { value } = e.target;
        const recipesSearch = recipes.filter((recipe) => recipe.title.toLowerCase().includes(value.toLowerCase()));
        setRecipes(recipesSearch);
    };

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
            <input type="search" name="search" onChange={handleChangeSearch}/>
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