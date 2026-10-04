function Card({
  nombre,
  descripcion,
  categoria,
  seleccionado,
  onSeleccionar
}) {
  return (
    <article className={seleccionado ? 'seleccionada' : ''}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {seleccionado ? 'Seleccionada' : 'No seleccionada'}</p>

      <button type="button" onClick={onSeleccionar} aria-pressed={seleccionado}>
        {seleccionado ? 'Quitar selección' : 'Seleccionar'}
      </button>
    </article>
  )
}

export default Card
