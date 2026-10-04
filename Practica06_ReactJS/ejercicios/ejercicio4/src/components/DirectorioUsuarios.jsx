import { useEffect, useState } from "react";
import TarjetaUsuario from "./TarjetaUsuario";

export default function DirectorioUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controlador = new AbortController();

    async function obtenerUsuarios() {
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controlador.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la información.");
        }

        const datos = await respuesta.json();

        if (!Array.isArray(datos)) {
          throw new Error("La API no devolvió una lista de usuarios.");
        }

        if (!controlador.signal.aborted) {
          setUsuarios(datos);
        }
      } catch (errorConsulta) {
        if (!controlador.signal.aborted) {
          setError(
            "No se pudieron cargar los usuarios. Revisa tu conexión y recarga la página."
          );
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    obtenerUsuarios();

    return () => controlador.abort();
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase())
  );

  if (cargando) {
    return (
      <p className="mensaje" role="status">
        Cargando usuarios...
      </p>
    );
  }

  if (error) {
    return (
      <p className="mensaje mensaje-error" role="alert">
        {error}
      </p>
    );
  }

  return (
    <section aria-label="Directorio de usuarios">
      <div className="panel-busqueda">
        <label htmlFor="busqueda">Buscar usuario por nombre</label>

        <input
          id="busqueda"
          type="search"
          placeholder="Escribe un nombre..."
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />

        <p className="contador" role="status">
          Mostrando {usuariosFiltrados.length} de {usuarios.length} usuarios
        </p>
      </div>

      {usuariosFiltrados.length === 0 ? (
        <p className="mensaje" role="status">
          No se encontraron usuarios que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className="lista-usuarios">
          {usuariosFiltrados.map((usuario) => (
            <TarjetaUsuario
              key={usuario.id}
              usuario={usuario}
            />
          ))}
        </div>
      )}
    </section>
  );
}
