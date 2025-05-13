import './App.css';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greetins={"Bienvenido"} />
      <Contador />
    </>
    
  );
};

export default App;
