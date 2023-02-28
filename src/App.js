import './App.css';
import Tarjeta from './componentes/Tarjeta'


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 >Hola! Gracias por visitar mi CV online</h1>
        <Tarjeta 
          nombre='Emmanuel Marcos Gabriel Villalba'
          pais='Argentina'
          imagen='Marcos'
          cargo='Futuro desarrollador react'
          empresa='Codo a Codo'
          testimonio='Egresado fullstack desarrollo web, estudiante de Ing. en Sistemas en búsqueda del primer trabajo como desarrollador.'
        />
        

      </div>
    </div>
  );
}

export default App;
