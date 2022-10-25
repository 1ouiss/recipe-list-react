const CardRecipe = ({recipe}) => {
    return ( 
        <li>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{recipe.pseudo}</p>
        </li>
     );
}
 
export default CardRecipe;