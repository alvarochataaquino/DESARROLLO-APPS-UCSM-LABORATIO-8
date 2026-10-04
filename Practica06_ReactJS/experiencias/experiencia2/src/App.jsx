import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'

const tecnologias = [
  {
    id: 1,
    nombre: 'React',
    descripcion: 'Biblioteca para construir interfaces de usuario.',
    categoria: 'Frontend'
  },
  {
    id: 2,
    nombre: 'Node.js',
    descripcion: 'Entorno para ejecutar JavaScript en el servidor.',
    categoria: 'Backend'
  },
  {
    id: 3,
    nombre: 'PostgreSQL',
    descripcion: 'Sistema de gestión de bases de datos relacionales.',
    categoria: 'Base de datos'
  },
  {
    id: 4,
    nombre: 'Docker',
    descripcion: 'Plataforma para crear y ejecutar contenedores.',
    categoria: 'Infraestructura'
  }
]

function App() {
  const [seleccionadas, setSeleccionadas] = useState([])

  function cambiarSeleccion(id) {
    setSeleccionadas((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((elementoId) => elementoId !== id)
        : [...anteriores, id]
    )
  }

  return (
    <>
      <Header />

      <main>
        <h2>Tecnologías disponibles</h2>
        <p>Seleccionadas: {seleccionadas.length}</p>

        <section>
          {tecnologias.map((tecnologia) => (
            <Card
              key={tecnologia.id}
              nombre={tecnologia.nombre}
              descripcion={tecnologia.descripcion}
              categoria={tecnologia.categoria}
              seleccionado={seleccionadas.includes(tecnologia.id)}
              onSeleccionar={() => cambiarSeleccion(tecnologia.id)}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
