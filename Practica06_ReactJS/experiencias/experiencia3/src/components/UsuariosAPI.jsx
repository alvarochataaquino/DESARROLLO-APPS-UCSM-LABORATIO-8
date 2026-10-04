import { useEffect, useState } from 'react'

function UsuariosAPI() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controlador = new AbortController()

    async function obtenerUsuarios() {
      try {
        const respuesta = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controlador.signal }
        )

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener los usuarios')
        }

        const datos = await respuesta.json()
        if (!Array.isArray(datos)) {
          throw new Error('La API no devolvió una lista de usuarios.')
        }

        if (!controlador.signal.aborted) {
          setUsuarios(datos)
        }
      } catch (error) {
        if (!controlador.signal.aborted) {
          setError(error.message)
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false)
        }
      }
    }

    obtenerUsuarios()

    return () => controlador.abort()
  }, [])

  if (cargando) {
    return <p role="status">Cargando información...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
    <section>
      <h2>Usuarios obtenidos de la API</h2>

      {usuarios.map((usuario) => (
        <article key={usuario.id}>
          <h3>{usuario.name}</h3>
          <p>Correo: {usuario.email}</p>
          <p>Ciudad: {usuario.address.city}</p>
        </article>
      ))}
    </section>
  )
}

export default UsuariosAPI
