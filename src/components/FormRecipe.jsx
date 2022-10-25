import { useState } from "react";

const FormRecipe = ({pseudo, recipes, setRecipes}) => {
    const [recipe, setRecipe] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
        console.log(recipe);
    };

    const handleSubmit = (e, recipe) => {
        e.preventDefault();
        setRecipes([...recipes, recipe]);
        console.log(recipes);
        setRecipe({});
    };

    return ( 
        <form onSubmit={(e) => handleSubmit(e, recipe)}>
            <input type="text" placeholder="Nom de la recette" name="title" onChange={handleChange}/>
            <input type="text" placeholder="Ingrédients" name="ingredients" onChange={handleChange}/>
            <input type="hidden" name="pseudo" value={pseudo}/>
            <input type="text" placeholder="Instructions" name="instructions" onChange={handleChange}/>
            <input type="submit" value="Ajouter une recette"/>
        </form>
     );
}
 
export default FormRecipe;