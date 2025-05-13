import { useState } from 'react';
import './Contador.css';

function Contador() {

    //para poder cambiar el valor de una variable en tiempo real React utiliza Hooks
    //se reliza de la siguiente forma:
    // const [nombreDelEstado, setNombreDelEstado] = useState(estadoInicial);

    const [numero, setNumero] = useState(5);

    return (
     <div className='contador-container'>
        <h1>Contador</h1>
        <div className='buttons-container'>
            <button className='btn-modify' onClick={() => setNumero(numero + 1)}>+</button>
            <p id="numero"> {numero} </p>
            <button className='btn-modify' onClick={() => setNumero(numero - 1)}>-</button>
        </div>
     </div>
    );
};

export default Contador;