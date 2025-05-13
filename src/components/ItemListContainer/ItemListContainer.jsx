import { useEffect, useState } from 'react';
import { fetchData } from '../fetchData';
import Item from '../Item/Item';
import './ItemListContainer.css';
import Loader from '../Loader/Loader';



function ItemListContainer({greetins}) {

    const [product, setProduct] = useState([]);
    const [allProduct, setAllProduct] = useState([]); /* Este estado 
    solo me va a servir como una especie de base de datos local en mi 
    proyecto para no tener que seguir solicitando infinitas veces de 
    acuerdo a los filtros que aplique. Si aplico el filtro de no mostrar
    productos, eventualmente puedo perder esa información. Así que acá 
    tenemos un backup*/
    const [loading, setLoading] = useState(true);

    const usarFiltro = (filtro) => {
        switch (filtro) {
            case "Ninguno":
                setProduct([]);
                break;
            case "Baratos":
                setProduct(allProduct.filter(el => el.precio < 100));
                break;
            case "Caros":
                setProduct(allProduct.filter(el => el.precio >= 100));
                break;
            case "Todos":
                setProduct(allProduct);
                break;
        };
    };

    /* 
    Situación presentada: En vez de utilizar el estado para tener mi "Backup",
     voy a modificar el estado misProductos utilizando el estado inicial

     Cuando di click en baratos, me trajo los baratos. Pero los caros desaparecieron 
     Cuando di click en caros, buscó los caros, pero los caros ya no están, porque los
     borré al setear los baratos.

     -useState: hook que nos perimite poder crear estados. Los estados son variables
     que van a ir modificandose y en sus modificaciones también modificamos el DOM.
     -Estado de loading: simulamos el loading de una base de daots cuando hacemos el 
     fetch, utilizando un loading true que luego se setea en false.
     -Fetch de datos: estamos emulando que traemos información de una base de datos 
     aunque realmente lo que estamos haciendo es buscarla localmente con un promesa.
     -useEffect: hook que nos permite ejecutar alguna funcionalidad cada vez que la 
     dependencia pasada en el array se modifique. SI pasamos array vacío, se ejecuta 
     una única vez al montar el componente y no se vuelve a ejecutar. Esto nos permite 
     evitar ejecutar varias veces lo mismo.
     -Map: para mostrar un array en nuestro html tenemos que hacer map, return y lo que
     queremos retornar. React nos pide que cuando hacemos un map pasemos KEY (si no 
     tenemos id de producto, podemos pasar como key el índice del elemento en su array).
    
    */


    // Hook de efectos: useEffect
 
    useEffect(() => {
        fetchData
        fetchData().then(response => {
            setProduct(response);
            setAllProduct(response);
            setLoading(false);
        })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
        <h1>{greetins}</h1>
        <hr />
        <div className='container-filter'> 
            <button onClick={() => usarFiltro("Todos")}> Todos </button>
            <button onClick={() => usarFiltro("Baratos")}> Baratos </button>
            <button onClick={() => usarFiltro("Caros")}> Caros </button>
            <button onClick={() => usarFiltro("Ninguno")}> Ninguno </button>
        </div>

        <div className='container-cards'> 

            {
                 loading ? <Loader/> :
                 allProduct.map(el => {
                    return(
                        <Item key={el.id} nombre={el.nombre} precio= {el.precio}/>
                    );
                })
            }

            {/* <Item nombre={"Producto 1"} precio={100} />
            <Item nombre={"Producto 2"} precio={125}/>
            <Item nombre={"Producto 3"} precio={75}/> */}
        </div>
        </>
    );
};

export default ItemListContainer;