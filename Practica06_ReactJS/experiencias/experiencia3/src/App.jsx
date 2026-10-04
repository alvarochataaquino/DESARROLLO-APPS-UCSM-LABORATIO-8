import './App.css'
import { useState } from 'react'
import Formulario from './components/Formulario'
import UsuariosAPI from './components/UsuariosAPI'

function App() {
  const [registros, setRegistros] = useState([])

  function agregarRegistro(nuevoRegistro) {
    setRegistros((anteriores) => [...anteriores, nuevoRegistro])
  }

  return (
    <main>
      <h1>Registro y consulta de usuarios</h1>

      <Formulario agregarRegistro={agregarRegistro} />

      <section>
        <h2>Usuarios registrados</h2>

        {registros.length === 0 ? (
          <p>Aún no se han registrado usuarios.</p>
        ) : (
          registros.map((registro) => (
            <article key={registro.id}>
              <h3>{registro.nombre}</h3>
              <p>Correo: {registro.correo}</p>
            </article>
          ))
        )}
      </section>

      <UsuariosAPI />
    </main>
  )
}

export default App
