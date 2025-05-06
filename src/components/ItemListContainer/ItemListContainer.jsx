import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer({greetins}) {
    return (
        <>
        <h1>{greetins}</h1>
        <div className='container-cards'> 
            <Item nombre={"Producto 1"} precio={100} />
            <Item nombre={"Producto 2"} precio={125}/>
            <Item nombre={"Producto 3"} precio={75}/>
        </div>
        </>
    );
};

export default ItemListContainer;