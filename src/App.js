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
          testimonio='Egresado fullstack desarrollo web en Codo a Codo, estudiante de cuarto año en la Universidad Tecnológica Nacional Regional Buenos Aires de la carrera de grado de Ingeniería en Sistemas de Información. Cuento con competencias de compromiso, trabajo en equipo e iniciativa. Tengo sólidos conocimientos en uso de software y rápido aprendizaje en el uso de nuevos lenguajes y programas. Soy una persona activa y responsable que desea poner en práctica todos los conocimientos obtenidos durante mi formación profesional. Como objetivo principal, incorporar conocimientos nuevos.'
        />
        

      </div>
    </div>
  );
}

export default App;
