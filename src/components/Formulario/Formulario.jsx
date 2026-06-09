import { useState } from 'react'
import './Formulario.css'

function Formulario({ onAgregarVehiculo }) {
  const [patente, setPatente] = useState('')
  const [hora, setHora] = useState('')
  const [permanente, setPermanente] = useState(false)

  const validarPatente = (patente) => {
    const regex = /^[A-Za-z]{4}[0-9]{2}$/
    return regex.test(patente)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!patente.trim() || !hora) {
      alert('Por favor complete todos los campos')
      return
    }
    
    if (!validarPatente(patente)) {
      alert('Formato de patente inválido. Debe ser 4 letras y 2 números (Ej: ABCD12)')
      return
    }
    
    const nuevoVehiculo = {
      id: Date.now(),
      patente: patente.toUpperCase(),
      hora: hora,
      permanente: permanente
    }
    
    const exito = onAgregarVehiculo(nuevoVehiculo)
    
    if (exito !== false) {
      setPatente('')
      setHora('')
      setPermanente(false)
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h3>Registrar nuevo vehículo</h3>
      
      <div className="campo">
        <label htmlFor="patente">Patente (4 letras + 2 números):</label>
        <input
          type="text"
          id="patente"
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
          placeholder="Ej: ABCD12"
          maxLength={6}
        />
      </div>

      <div className="campo">
        <label htmlFor="hora">Hora de ingreso:</label>
        <input
          type="time"
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </div>

      <div className="campoCheckbox">
        <label htmlFor="permanente">¿Es permanente?</label>
        <input
          type="checkbox"
          id="permanente"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
      </div>

      <button type="submit">Registrar vehículo</button>
    </form>
  )
}

export default Formulario