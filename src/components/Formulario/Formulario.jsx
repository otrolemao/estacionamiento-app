import { useState } from 'react'
import { validarPatente, formatearPatente } from '../../data/helpers'
import './Formulario.css'

function Formulario({ onAgregarVehiculo }) {
  const [patente, setPatente] = useState('')
  const [hora, setHora] = useState('')
  const [permanente, setPermanente] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!patente.trim() || !hora) {
      alert('Por favor complete todos los campos')
      return
    }
    
    if (!validarPatente(patente)) {
      alert('Formato de patente invalido. Debe ser 4 letras y 2 numeros (Ej: ABCD12)')
      return
    }
    
    const nuevoVehiculo = {
      id: Date.now(),
      patente: formatearPatente(patente),
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
      <h3>Registrar nuevo vehiculo</h3>
      
      <div className="campo">
        <label htmlFor="patente">Patente (4 letras + 2 numeros):</label>
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
        <label htmlFor="permanente">Es permanente?</label>
        <input
          type="checkbox"
          id="permanente"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
      </div>

      <button type="submit">Registrar vehiculo</button>
    </form>
  )
}

export default Formulario