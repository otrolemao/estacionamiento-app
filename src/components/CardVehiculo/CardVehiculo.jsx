import './CardVehiculo.css'

function CardVehiculo({ vehiculo }) {
  const claseCard = `${vehiculo.permanente ? 'card permanente' : 'card visitante'}`

  return (
    <div className={claseCard}>
      <div className="card-header">
        <h4>{vehiculo.patente}</h4>
      </div>
      <div className="card-body">
        <p><strong>Hora ingreso:</strong> {vehiculo.hora}</p>
        <p><strong>Tipo:</strong> {vehiculo.permanente ? 'Permanente' : 'Visitante'}</p>
      </div>
    </div>
  )
}

export default CardVehiculo