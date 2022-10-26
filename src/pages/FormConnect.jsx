const FormConnect = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.pseudo !== '') {
            window.location.href = `/recipes/${props.pseudo}`;
        }else{
            alert('Veuillez renseigner un pseudo');
        }
    };
    return ( 
        <div className="container">
            <h1>FormConnect</h1>
            <form onSubmit={handleSubmit} className="form-connect">
                <input
                    type="text"
                    value={props.pseudo}
                    onChange={(e) => props.setPseudo(e.target.value)}
                    placeholder="Votre pseudo"
                />
                <input type="submit" value="Se connecter"/>
            </form>
        </div>

     );
}
 
export default FormConnect;