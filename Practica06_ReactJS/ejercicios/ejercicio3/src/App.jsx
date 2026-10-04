import { useState } from 'react'
import LaptopCard from './components/LaptopCard'
import './App.css'

const laptopsIniciales = [
  {
    id: 1,
    nombre: 'Laptop 01',
    descripcion: 'Equipo utilizado para prácticas de programación.',
    estado: 'Operativa',
    codigo: 'LAB-001',
    ubicacion: 'Mesa 01'
  },
  {
    id: 2,
    nombre: 'Laptop 02',
    descripcion: 'Equipo asignado a una práctica en curso.',
    estado: 'En uso',
    codigo: 'LAB-002',
    ubicacion: 'Mesa 02'
  },
  {
    id: 3,
    nombre: 'Laptop 03',
    descripcion: 'Equipo pendiente de revisión técnica.',
    estado: 'En mantenimiento',
    codigo: 'LAB-003',
    ubicacion: 'Área técnica'
  },
  {
    id: 4,
    nombre: 'Laptop 04',
    descripcion: 'Equipo que presenta fallas al encender.',
    estado: 'Malograda',
    codigo: 'LAB-004',
    ubicacion: 'Área técnica'
  },
  {
    id: 5,
    nombre: 'Laptop 05',
    descripcion: 'Equipo disponible para los estudiantes.',
    estado: 'Operativa',
    codigo: 'LAB-005',
    ubicacion: 'Mesa 05'
  }
]

function App() {
  const [laptops, setLaptops] = useState(laptopsIniciales)

  function cambiarEstado(id, nuevoEstado) {
    setLaptops((anteriores) =>
      anteriores.map((laptop) =>
        laptop.id === id
          ? { ...laptop, estado: nuevoEstado }
          : laptop
      )
    )
  }

  return (
    <main className="contenedor">
      <header>
        <h1>Estado de laptops del laboratorio</h1>
        <p>Consulta los equipos y actualiza su disponibilidad.</p>
      </header>

      <section className="cuadricula" aria-label="Laptops del laboratorio">
        {laptops.map((laptop) => (
          <LaptopCard
            key={laptop.id}
            laptop={laptop}
            onCambiarEstado={cambiarEstado}
          />
        ))}
      </section>
    </main>
  )
}

export default App
