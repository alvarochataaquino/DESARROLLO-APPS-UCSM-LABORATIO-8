function PersonalidadCard({
  nombre,
  descripcion,
  rasgo,
  seleccionada,
  onSeleccionar
}) {
  return (
    <article className={`tarjeta ${seleccionada ? 'tarjeta-seleccionada' : ''}`}>
      <div className="inicial" aria-hidden="true">
        {nombre.charAt(0)}
      </div>

      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p className="rasgo">Rasgo: {rasgo}</p>

      <button type="button" onClick={onSeleccionar} aria-pressed={seleccionada}>
        {seleccionada ? 'Quitar selección' : 'Seleccionar'}
      </button>
    </article>
  )
}

export default PersonalidadCard
