import './Item.css';

function Item({nombre,precio}) {

    function agregarAlCarrito() {
        console.log("Vas a agregar al carrito: ", nombre);
    };

    return (
        <div className="card">
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <button disabled={!nombre} className='card-btn' onClick={() => agregarAlCarrito() }>Agregar al Carrito</button>
        </div>
    );
};

export default Item;