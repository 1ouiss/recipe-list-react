import { useState } from "react";

const FormRecipe = () => {
    const [recipe, setRecipe] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
        console.log(recipe);
    };
    return ( 
        <form>
            <input type="text" placeholder="Nom de la recette" name="title" onChange={handleChange}/>
            <input type="text" placeholder="Ingrédients" name="ingredients" onChange={handleChange}/>
            <input type="text" placeholder="Instructions" name="instructions" onChange={handleChange}/>
            <input type="submit" value="Ajouter une recette"/>
        </form>
     );
}
 
export default FormRecipe;