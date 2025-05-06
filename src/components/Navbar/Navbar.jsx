import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'> 
                <p>Logo</p>
                <ul className='nav-bar-options'>
                    <li className='nav-bar-item'>Home</li>
                    <li className='nav-bar-item'>Producto</li>
                    <li className='nav-bar-item'>Contacto </li>
                </ul>
                <p>Icono carrito (4)</p>
            </nav>
        </header>

    );
};

export default Navbar;