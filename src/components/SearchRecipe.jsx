import { TextField } from "@mui/material";

const SearchRecipe = ({recipes, setRecipes}) => {

    const handleChangeSearch = (e) => {
        const { value } = e.target;
        const recipesSearch = recipes.filter((recipe) => recipe.title.toLowerCase().includes(value.toLowerCase()));
        setRecipes(recipesSearch);
    };
    
    return ( 
        <TextField
            id="outlined-basic"
            label="Rechercher une recette"
            variant="outlined"
            onChange={handleChangeSearch}
        />
     );
}
 
export default SearchRecipe;