import { useState } from 'react'
import Formulario from './components/Formulario'
import UsuariosAPI from './components/UsuariosAPI'
import './App.css'

function App() {
  const [personasRegistradas, setPersonasRegistradas] = useState([])

  function agregarPersona(persona) {
    setPersonasRegistradas((anteriores) => [...anteriores, persona])
  }

  return (
    <main className="contenedor">
      <header className="encabezado">
        <h1>ChataAPI</h1>
        <p>Registro de personas y consulta de usuarios</p>
      </header>

      <div className="columnas">
        <Formulario agregarPersona={agregarPersona} />

        <section className="panel">
          <h2>Personas registradas</h2>

          {personasRegistradas.length === 0 ? (
            <p>Todavía no hay personas registradas.</p>
          ) : (
            <div className="lista">
              {personasRegistradas.map((persona) => (
                <article className="usuario" key={persona.id}>
                  <h3>{persona.nombre}</h3>
                  <p><strong>Correo:</strong> {persona.correo}</p>
                  <p><strong>Ciudad:</strong> {persona.ciudad}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      <UsuariosAPI />
    </main>
  )
}

export default App
