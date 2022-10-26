import FormRecipe from "./FormRecipe";
import { useState } from "react";
import CardRecipe from "./CardRecipe";

const RecipeList = ({pseudo}) => {
    const [recipesSearch, setRecipesSearch] = useState([]);
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            pseudo: "moi",
            title: "Pizza",
            ingredients: "Pâte, tomate, fromage",
            instructions: "Etaler la pâte, mettre la sauce, mettre le fromage, mettre au four"
        },
        {
            id: 2,
            pseudo: "pas moi",
            title: "Pâtes",
            ingredients: "Pâtes, tomate, fromage",
            instructions: "Faire cuire les pâtes, mettre la sauce, mettre le fromage"
        }
    ]);

    const handleChangeSearch = (e) => {
        const { value } = e.target;

        const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(value.toLowerCase()));
        setRecipesSearch(filteredRecipes);
    };

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