import { useState } from 'react'

const estados = [
  'Operativa',
  'En uso',
  'En mantenimiento',
  'Malograda'
]

const clasesEstado = {
  'Operativa': 'operativa',
  'En uso': 'en-uso',
  'En mantenimiento': 'mantenimiento',
  'Malograda': 'malograda'
}

function LaptopCard({ laptop, onCambiarEstado }) {
  const [nuevoEstado, setNuevoEstado] = useState(laptop.estado)
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  return (
    <article className="tarjeta">
      <div className="tarjeta-superior">
        <h2>{laptop.nombre}</h2>
        <span className={`estado ${clasesEstado[laptop.estado]}`}>
          {laptop.estado}
        </span>
      </div>

      <p>{laptop.descripcion}</p>

      <label htmlFor={`estado-${laptop.id}`}>Nuevo estado:</label>
      <select
        id={`estado-${laptop.id}`}
        value={nuevoEstado}
        onChange={(event) => setNuevoEstado(event.target.value)}
      >
        {estados.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>

      <div className="acciones">
        <button
          type="button"
          onClick={() => onCambiarEstado(laptop.id, nuevoEstado)}
        >
          Actualizar estado
        </button>

        <button
          type="button"
          className="boton-secundario"
          aria-expanded={mostrarDetalles}
          onClick={() => setMostrarDetalles((anterior) => !anterior)}
        >
          {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
        </button>
      </div>

      {mostrarDetalles && (
        <div className="detalles">
          <p><strong>Código:</strong> {laptop.codigo}</p>
          <p><strong>Ubicación:</strong> {laptop.ubicacion}</p>
        </div>
      )}
    </article>
  )
}

export default LaptopCard
