import { useState, useEffect } from 'react'
import Formulario from './components/Formulario/Formulario'
import ListaVehiculos from './components/ListaVehiculos/ListaVehiculos'
import './App.css'

function App() {
  const [vehiculos, setVehiculos] = useState([])

  useEffect(() => {
    const vehiculosGuardados = localStorage.getItem('vehiculos')
    if (vehiculosGuardados) {
      setVehiculos(JSON.parse(vehiculosGuardados))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos))
  }, [vehiculos])

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert('Capacidad máxima alcanzada (10 vehículos)')
      return false
    }
    setVehiculos([...vehiculos, nuevoVehiculo])
    return true
  }

  const cuposDisponibles = 10 - vehiculos.length

  return (
    <>
      <header>
        <h1>Sistema de Gestión de Estacionamientos</h1>
        <div className="cupos">
          <p>Cupos disponibles: {cuposDisponibles} / 10</p>
        </div>
      </header>
      
      <main>
        <Formulario onAgregarVehiculo={agregarVehiculo} />
        
        <div className="lista-container">
          <h3>Vehículos estacionados ({vehiculos.length})</h3>
          {vehiculos.length === 0 ? (
            <p>No hay vehículos estacionados</p>
          ) : (
            <ListaVehiculos vehiculos={vehiculos} />
          )}
        </div>
      </main>
      
      <footer>
        <p>© 2024 - Sistema de Estacionamiento</p>
      </footer>
    </>
  )
}

export default App