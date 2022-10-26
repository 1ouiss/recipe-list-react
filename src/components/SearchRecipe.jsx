const SearchRecipe = ({recipes, setRecipes}) => {

    const handleChangeSearch = (e) => {
        const { value } = e.target;
        const recipesSearch = recipes.filter((recipe) => recipe.title.toLowerCase().includes(value.toLowerCase()));
        setRecipes(recipesSearch);
    };
    
    return ( 
        <form>
            <input type="text" placeholder="Rechercher une recette" onChange={handleChangeSearch}/>
        </form>
     );
}
 
export default SearchRecipe;