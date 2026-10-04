import { useState } from 'react'

function Formulario({ agregarPersona }) {
  const [error, setError] = useState('')
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    ciudad: ''
  })

  function cambiarCampo(event) {
    const { name, value } = event.target

    setDatos((anteriores) => ({
      ...anteriores,
      [name]: value
    }))
  }

  function enviarFormulario(event) {
    event.preventDefault()

    if (
      !datos.nombre.trim() ||
      !datos.correo.trim() ||
      !datos.ciudad.trim()
    ) {
      setError('Completa todos los campos sin usar solo espacios.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo.trim())) {
      setError('Ingresa un correo electrónico válido.')
      return
    }

    setError('')

    agregarPersona({
      id: crypto.randomUUID(),
      nombre: datos.nombre.trim(),
      correo: datos.correo.trim(),
      ciudad: datos.ciudad.trim()
    })

    setDatos({
      nombre: '',
      correo: '',
      ciudad: ''
    })
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Registrar persona</h2>

      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        value={datos.nombre}
        onChange={cambiarCampo}
        required
      />

      <label htmlFor="correo">Correo electrónico</label>
      <input
        id="correo"
        name="correo"
        type="email"
        value={datos.correo}
        onChange={cambiarCampo}
        required
      />

      <label htmlFor="ciudad">Ciudad</label>
      <input
        id="ciudad"
        name="ciudad"
        type="text"
        value={datos.ciudad}
        onChange={cambiarCampo}
        required
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Guardar registro</button>
    </form>
  )
}

export default Formulario
