import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { useState } from 'react';

function App() {


const[contador, setContador]=useState(0)
function sumar () {
    setContador(contador +1)
}

    return (
    <div className='app'>
{/* ---- Incluimos NavBar ----*/}
    <NavBar />
{/* ---- Incluimos ItemListContainer ----*/}
    <ItemListContainer saludo={'Hola! Bienvenid@ a mi tienda de libros usados y nuevos. Ojalá te guste.'}/>
{/* ---- Contador con estados ---- */}
    <div className='librosLeidos'>
        <h3>Contador de libros leidos este año:</h3>
        <button onClick={sumar}>+</button><h3>{contador}</h3>
    </div>
    
    </div>
    );

}

export default App;
