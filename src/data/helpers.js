export const validarPatente = (patente) => {
  const regex = /^[A-Za-z]{4}[0-9]{2}$/
  return regex.test(patente)
}

export const formatearPatente = (patente) => {
  return patente.toUpperCase()
}