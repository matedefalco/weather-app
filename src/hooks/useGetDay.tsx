import React from "react"

type GetDaysProps = {
	dayType: string
}

export const useGetDay: React.FC<GetDaysProps> = ({ dayType }) => {
	const diasSemana = [
		"Domingo",
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
	]

	// Crear una instancia del objeto Date para la fecha actual
	const fechaActual = new Date()

	if (dayType === "today") {
		const numeroDiaSemana = fechaActual.getDay()

		const nombreDiaSemana = diasSemana[numeroDiaSemana]

		return nombreDiaSemana
	} else if (dayType === "tomorrow") {
		fechaActual.setDate(fechaActual.getDate() + 1)
		const numeroDiaSemana = fechaActual.getDay()

		const nombreDiaSemana = diasSemana[numeroDiaSemana]

		return nombreDiaSemana.toString()
	} else if (dayType === "pastTomorrow") {
		fechaActual.setDate(fechaActual.getDate() + 2)
		const numeroDiaSemana = fechaActual.getDay()

		const nombreDiaSemana = diasSemana[numeroDiaSemana]

		return nombreDiaSemana.toString()
	}

	// Si el parámetro no es válido, retorna null o lanza un error, dependiendo de tus necesidades.
	return null
}
