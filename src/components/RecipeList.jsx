import FormRecipe from "./FormRecipe";

const RecipeList = (props) => {
    
    return (
        <div>
            <h1>Hello {props.pseudo}</h1>
            <FormRecipe/>
        </div>
     );
}
 
export default RecipeList;