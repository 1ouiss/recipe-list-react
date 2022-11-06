import FormRecipe from "../components/FormRecipe";
import { useEffect, useContext, useState} from "react";
import CardRecipe from "../components/CardRecipe";
import { useParams } from "react-router-dom";
import SearchRecipe from "../components/SearchRecipe";
import { Container } from "@mui/material";
import { RecipesContext } from "../App";

const RecipeList = () => {
    const {pseudo} = useParams();
    const {recipes, setRecipes} = useContext(RecipesContext);
    const [recipesSearch, setRecipesSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    const getLocalStorage = () => {
        const recipesLocalStorage = JSON.parse(localStorage.getItem(pseudo));
        if (recipesLocalStorage) {
            setRecipes(recipesLocalStorage);
        }
    };

    useEffect(() => {
        getLocalStorage();
    // eslint-disable-next-line
    }, []);

    return (
        <Container maxWidth="lg">
            <h1>Hello {pseudo}</h1>
            <FormRecipe pseudo={pseudo} recipes={recipes} setRecipes={setRecipes}/>
            <SearchRecipe recipesSearch={recipesSearch} setRecipesSearch={setRecipesSearch} setIsSearch={setIsSearch} pseudo={pseudo}/>
            <ul className="recipe-list">
                {
                    isSearch ? recipesSearch.map((recipe) => (
                        <CardRecipe key={recipe.id} recipe={recipe} pseudo={pseudo} recipes={recipes} setRecipes={setRecipes}/>
                    )) : recipes.map((recipe) => (
                        <CardRecipe key={recipe.id} recipe={recipe} pseudo={pseudo} recipes={recipes} setRecipes={setRecipes}/>
                    ))
                }
            </ul>
        </Container>
     );
}
 
export default RecipeList;