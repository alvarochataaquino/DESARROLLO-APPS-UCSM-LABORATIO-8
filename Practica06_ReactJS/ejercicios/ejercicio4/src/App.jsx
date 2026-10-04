import DirectorioUsuarios from "./components/DirectorioUsuarios";
import "./App.css";

export default function App() {
  return (
    <div className="aplicacion">
      <header className="encabezado">
        <h1>Consulta de usuarios</h1>
        <p>
          Busca un usuario por su nombre para consultar sus datos.
        </p>
      </header>

      <main>
        <DirectorioUsuarios />
      </main>

      <footer className="pie">
        Desarrollo de Aplicaciones — Ejercicio 4
      </footer>
    </div>
  );
}
