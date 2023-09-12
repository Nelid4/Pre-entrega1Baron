        <h1>Hola Mundo!</h1>
{/* Boton para que diga si login es true o false */}
        {(logueado === false) ? (
        <button>
        <b>Es verdad</b>
        </button>
        ) : (
            <button>
            <b>No es verdad</b>
            </button>
            )}
{/* Aparece form dependiendo si se necesita el formulario de registro o el de login */}
        {tipoForm === "registro" ? <FormRegistro /> : <FormLogin />}
{/* Creando un método para un array */}
{console.log(busqueda)}




    let logueado = true; 
    let tipoForm = "login";
    