import { useState } from "react";
import { TextField, Button } from "@mui/material";

const FormRecipe = ({pseudo, recipes, setRecipes}) => {
    const [recipe, setRecipe] = useState({
        pseudo: pseudo
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({
            ...recipe,
            [name]: value
        });
    };

    const handleSubmit = (e, recipe) => {
        e.preventDefault()
        recipe.id = recipes.length + 1;
        setRecipes([...recipes, recipe]);
        setRecipe({
            pseudo: pseudo
        });
        e.target.reset();
        localStorage.setItem(pseudo, JSON.stringify(recipes));
    };
    

    return (
        <form onSubmit={(e) => handleSubmit(e, recipe)}>
            <TextField
                label="Nom de la recette"
                variant="outlined"
                name="title"
                onChange={handleChange}
                className="form-input"
            />
            <TextField
                label="Ingrédients"
                variant="outlined"
                name="ingredients"
                onChange={handleChange}
                className="form-input"
            />
            <TextField
                label="Instructions"
                variant="outlined"
                name="instructions"
                onChange={handleChange}
                className="form-input"
            />
            <TextField
                label="Url de l'image"
                variant="outlined"
                name="image"
                onChange={handleChange}
                className="form-input"
            />
            <Button variant="contained" type="submit">Ajouter la recette</Button>
        </form>
     );
}
 
export default FormRecipe;