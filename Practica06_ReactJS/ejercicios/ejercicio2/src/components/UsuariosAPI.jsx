import { useEffect, useState } from 'react'

function UsuariosAPI() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controlador = new AbortController()

    async function consultarUsuarios() {
      try {
        const respuesta = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controlador.signal }
        )

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener los usuarios.')
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

    consultarUsuarios()

    return () => controlador.abort()
  }, [])

  return (
    <section className="panel">
      <h2>Usuarios consultados desde la API</h2>

      {cargando && <p role="status">Cargando información...</p>}

      {error && <p role="alert">{error}</p>}

      {!cargando && !error && (
        <div className="lista">
          {usuarios.map((usuario) => (
            <article className="usuario" key={usuario.id}>
              <h3>{usuario.name}</h3>
              <p><strong>Correo:</strong> {usuario.email}</p>
              <p><strong>Ciudad:</strong> {usuario.address.city}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default UsuariosAPI
