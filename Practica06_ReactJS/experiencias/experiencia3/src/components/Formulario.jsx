import { useState } from 'react'

function Formulario({ agregarRegistro }) {
  const [error, setError] = useState('')
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')

  function manejarEnvio(event) {
    event.preventDefault()

    if (!nombre.trim() || !correo.trim()) {
      setError('Completa el nombre y el correo sin usar solo espacios.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      setError('Ingresa un correo electrónico válido.')
      return
    }

    setError('')

    agregarRegistro({
      id: crypto.randomUUID(),
      nombre: nombre.trim(),
      correo: correo.trim()
    })

    setNombre('')
    setCorreo('')
  }

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Registrar usuario</h2>

      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        required
      />

      <label htmlFor="correo">Correo:</label>
      <input
        id="correo"
        type="email"
        value={correo}
        onChange={(event) => setCorreo(event.target.value)}
        required
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Registrar</button>
    </form>
  )
}

export default Formulario
