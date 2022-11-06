import { TextField, Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const FormConnect = ({pseudo, setPseudo}) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/recipes/${pseudo}`;
    };
    // setError(true);

    const handleChange = (e) => {
        if (e.target.value.length <= 0) {
            setError(true);
            setPseudo(e.target.value);
        }else {
            setError(false);
            setPseudo(e.target.value);
        }
    };

    return ( 
        <div className="container">
            <h1>FormConnect</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Pseudo"
                    variant="outlined"
                    value={pseudo}
                    onChange={(e) => handleChange(e)}
                    className="form-input"
                />
                {error && <p className="error">Veuillez renseigner un pseudo</p>}
                <Button variant={pseudo ? "contained" : "disabled"} type="submit">Se connecter</Button>
            </form>
        </div>

     );
}
 
export default FormConnect;