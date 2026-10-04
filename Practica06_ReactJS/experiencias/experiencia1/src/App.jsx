import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const nombreAplicacion = 'Mi primera aplicación React'
  const nombreEquipo = 'Grupo 08'
  const descripcion = 'Aplicación creada para practicar JSX y la estructura de React. Reutilizamos el logo de react'

  return (
    <main className="aplicacion">
      <h1>{nombreAplicacion}</h1>
      <h2>Equipo: {nombreEquipo}</h2>
      <p>{descripcion}</p>
      <img src={reactLogo} alt="Logo de React" width="120" />
    </main>
  )
}

export default App
