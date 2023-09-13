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
    
    const numeros = [1,2,3,4,5,6]
Array.prototype.buscar = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]))
        {return this[i]}
        
    }
}
const busqueda = numeros.buscar((numeros) => numeros > 5)
import FormLogin from './components/formLogin'
import FormRegistro from './components/formRegistro'
import { useState } from 'react'