// import logo from './logo.svg';
import Animales from './Animales';
import './App.css';
import ButtonCarga from './ButtonCarga';
import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <h1>Tarea N°1 de React</h1>
      <ButtonCarga cargando={true}/>
      <hr/>
      <Animales />
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
