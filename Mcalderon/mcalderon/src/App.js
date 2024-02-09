import logo from './logo.svg';
import './App.css';

function App() {
let nombre ="Mathias";
nombre = "Danilo";

Function despedir (){
  alert("Adios");
}

  return (
    <div className="App">
      <h1>Hola Mundo</h1> {nombre}
      <input type="text"></input>
      <input type ="password"></input>
      <br></br>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <br></br>
      <button onClick={saludar}Saludar></button>
      <button onClick={despedir}Despedi1r></button>
    </div>
  );
}

export default App;
