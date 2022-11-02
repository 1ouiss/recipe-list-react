import { TextField, Button } from "@mui/material";

const FormConnect = ({pseudo, setPseudo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/recipes/${pseudo}`;
    };
    return ( 
        <div className="container">
            <h1>FormConnect</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Pseudo"
                    variant="outlined"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    className="form-input"
                />
                <Button variant={pseudo ? "contained" : "disabled"} type="submit">Se connecter</Button>
            </form>
        </div>

     );
}
 
export default FormConnect;