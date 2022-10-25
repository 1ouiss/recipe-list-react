import FormRecipe from "./FormRecipe";
import { useState } from "react";
import CardRecipe from "./CardRecipe";

const RecipeList = ({pseudo}) => {
    const [recipes, setRecipes] = useState([]);

    return (
        <div>
            <h1>Hello {pseudo}</h1>
            <FormRecipe pseudo={pseudo} recipes={recipes} setRecipes={setRecipes}/>
            <ul>
                {recipes.map((recipe, index) => (
                    <CardRecipe key={index} recipe={recipe}/>
                ))}
            </ul>
        </div>
     );
}
 
export default RecipeList;