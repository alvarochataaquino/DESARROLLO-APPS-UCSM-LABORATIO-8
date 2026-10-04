import { useState } from 'react'
import PersonalidadCard from './components/PersonalidadCard'
import './App.css'

const personalidades = [
  {
    id: 1,
    nombre: 'Barry',
    descripcion: 'Se interesa por el diseño de moda y conversa con la doctora Fletcher.',
    rasgo: 'Creatividad'
  },
  {
    id: 2,
    nombre: 'Dennis',
    descripcion: 'Es meticuloso y presta mucha atención al orden.',
    rasgo: 'Orden'
  },
  {
    id: 3,
    nombre: 'Patricia',
    descripcion: 'Se expresa con formalidad y procura imponer sus reglas.',
    rasgo: 'Autoridad'
  },
  {
    id: 4,
    nombre: 'Hedwig',
    descripcion: 'Se presenta como un niño de nueve años.',
    rasgo: 'Infancia'
  },
  {
    id: 5,
    nombre: 'La Bestia',
    descripcion: 'En la historia, se presenta como una identidad de fuerza extraordinaria.',
    rasgo: 'Fuerza'
  }
]

function App() {
  const [idSeleccionado, setIdSeleccionado] = useState(null)

  function cambiarSeleccion(id) {
    setIdSeleccionado((idAnterior) => (
      idAnterior === id ? null : id
    ))
  }

  const personalidadSeleccionada = personalidades.find(
    (personalidad) => personalidad.id === idSeleccionado
  )

  return (
    <main className="contenedor">
      <header className="encabezado">
        <p className="etiqueta">CATÁLOGO INTERACTIVO</p>
        <h1>Personalidades de Fragmentados</h1>
        <p>Selecciona una tarjeta para destacar una personalidad.</p>
      </header>

      <section className="tarjetas" aria-label="Personalidades">
        {personalidades.map((personalidad) => (
          <PersonalidadCard
            key={personalidad.id}
            nombre={personalidad.nombre}
            descripcion={personalidad.descripcion}
            rasgo={personalidad.rasgo}
            seleccionada={idSeleccionado === personalidad.id}
            onSeleccionar={() => cambiarSeleccion(personalidad.id)}
          />
        ))}
      </section>

      <p className="resultado" aria-live="polite">
        {personalidadSeleccionada
          ? `Personalidad seleccionada: ${personalidadSeleccionada.nombre}`
          : 'No hay ninguna personalidad seleccionada.'}
      </p>
    </main>
  )
}

export default App
