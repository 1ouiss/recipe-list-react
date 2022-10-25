const CardRecipe = ({recipe}) => {
    const { title, ingredients, instructions } = recipe;

    const sliptList = (text) => {
        return text.split(',').map((item, index) => (
            <li key={index}>{item}</li>
        ));
    };
    return ( 
        <li>
            <h2>{title}</h2>
            <div>
                <h3>Ingrédients</h3>
                <ul>
                    {sliptList(ingredients)}
                </ul>
            </div>
            <div>
                <h3>Instructions</h3>
                <ul>
                    {sliptList(instructions)}
                </ul>
            </div>
        </li>
     );
}
 
export default CardRecipe;