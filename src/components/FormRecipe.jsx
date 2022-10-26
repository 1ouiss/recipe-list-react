import { useState } from "react";

const FormRecipe = ({pseudo, recipes, setRecipes}) => {
    const [recipe, setRecipe] = useState({
        pseudo: pseudo
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = (e, recipe) => {
        e.preventDefault();
        recipe.id = recipes.length + 1;
        setRecipes([...recipes, recipe]);
        setRecipe({
            pseudo: pseudo
        });
        e.target.reset();
        console.log(recipes);
        localStorage.setItem(pseudo, JSON.stringify(recipes));
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