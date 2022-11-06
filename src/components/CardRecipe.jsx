import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardRecipe = ({recipe, setRecipes, recipes, index}) => {
    const { pseudo, title, ingredients, instructions, image } = recipe;

    const sliptList = (text) => {
        return text.split(',').map((item, index) => (
            <li key={index}>{item}</li>
        ));
    };

    const handleDelete = (e, recipe) => {
        const recipesDelete = recipes.filter((item) => item.id !== recipe.id);
        setRecipes(recipesDelete);
        localStorage.setItem(pseudo, JSON.stringify(recipesDelete));
    };

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title} by {pseudo}
                </Typography>
                <Typography variant='h6'>Ingrédients</Typography>
                <Typography variant='body2'>
                    {sliptList(ingredients)}
                </Typography>
                <Typography variant='h6'>Instructions</Typography>
                <Typography variant='body2'>
                    {sliptList(instructions)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={(e) => handleDelete(e, recipe)} color="error">Supprimer</Button>
            </CardActions>
        </Card>
     );
}
 
export default CardRecipe;