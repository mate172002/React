import logo from './logo.svg';
import Image from './components/image';
import gato from "./images/gatoenojado.jpg";
import Button from './components/button';


import './App.css';


function App() {
  const lanzarAlerta = () => {

    alert("Soy una alerta")
  }
  return (
    <div>
      <header>
        <p>
          Jhonder<code>src/App.js</code> and save to reload.
        </p>
        <Image paramLogo={logo} />
        <Image paramLogo={gato} />
        <Button id={"id"} name={"name"} events={()=>{lanzarAlerta();}}/>

      </header>
    </div>
  );
}

export default App;



