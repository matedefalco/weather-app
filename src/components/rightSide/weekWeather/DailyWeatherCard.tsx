import React from "react"
import { DailyWeatherData } from "../../../types/IWeatherData"
import { weatherIcons } from "../../../assets/WeatherIcons"

// Define un objeto que mapea nombres de clima a índices válidos
const weatherIndexMap: Record<string, number> = {
	cloudy: 0,
	cloudyRainy: 1,
	rainy: 2,
	stormy: 3,
	sunny: 4,
	sunnyCloudy: 5,
}

const DailyWeatherCard: React.FC<DailyWeatherData> = ({
	day,
	temperature,
	weather,
	weatherIcon,
}) => {
	// Obtiene el índice correspondiente al tipo de clima
	const weatherIndex = weatherIndexMap[weatherIcon]

	// Obtiene la URL de la imagen del objeto de asignación usando el índice
	const weatherIconSrc = weatherIcons.images[weatherIndex]?.src || ""

	return (
		<div className="card bg-white card-compact">
			<div className="card-body flex flex-col items-center justify-center overflow-scroll min-w-[12%]">
				<h2 className="font-bold">{day}</h2>
				<img src={weatherIconSrc} alt={weather} />
				<p className="font-bold text-xs">{temperature}°C</p>
			</div>
		</div>
	)
}

export default DailyWeatherCard
