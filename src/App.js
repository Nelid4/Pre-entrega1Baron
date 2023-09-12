import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormLogin from './components/formLogin';
import FormRegistro from './components/formRegistro';
import NavBar from './components/navBar/navBar';
import { useState } from 'react';
import ItemListContainer from './components/itemListContainer/itemListContainer'

const numeros = [1,2,3,4,5,6]
Array.prototype.buscar = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]))
        {return this[i]}
        
    }
}
const busqueda = numeros.buscar((numeros) => numeros > 5)


function App() {



    let logueado = true; 
    let tipoForm = "login";
    
    return (
    <div className='app'>
{/* ---- Incluimos NavBar ----*/}
    <NavBar />
{/* ---- Incluimos ItemListContainer ----*/}
    <ItemListContainer saludo={'Hola! Bienvenid@ a mi tienda de libros usados y nuevos. Ojalá te guste.'}/>
    </div>
    );

}

export default App;
