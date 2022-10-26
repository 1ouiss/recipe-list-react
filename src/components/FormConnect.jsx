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
        <div>
            <h1>FormConnect</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={props.pseudo}
                    onChange={(e) => props.setPseudo(e.target.value)}
                />
                <input type="submit" value="Se connecter"/>
            </form>
        </div>

     );
}
 
export default FormConnect;