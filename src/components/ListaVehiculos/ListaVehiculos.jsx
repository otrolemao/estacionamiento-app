import CardVehiculo from '../CardVehiculo/CardVehiculo'
import './ListaVehiculos.css'

function ListaVehiculos({ vehiculos }) {
  return (
    <div className="lista-vehiculos">
      {vehiculos.map((vehiculo) => (
        <CardVehiculo key={vehiculo.id} vehiculo={vehiculo} />
      ))}
    </div>
  )
}

export default ListaVehiculos