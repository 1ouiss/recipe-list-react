import { TextField } from "@mui/material";

const SearchRecipe = ({recipesSearch, setRecipesSearch, setIsSearch, pseudo}) => {

    const handleChangeSearch = (e) => {
        const { value } = e.target;
        setRecipesSearch(JSON.parse(localStorage.getItem(pseudo)))
        if (value.length > 0) {
            setIsSearch(true);
            const listSearch = recipesSearch.filter((recipe) => recipe.title.toLowerCase().includes(value.toLowerCase()));
            setRecipesSearch(listSearch);
        }else {
            setIsSearch(false);
        }
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