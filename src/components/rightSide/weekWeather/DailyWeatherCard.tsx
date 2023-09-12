import React from "react"
import { TodaysWeatherProps } from "../../../types/IWeatherData"
import { weatherIcons } from "../../../assets/WeatherIcons"
import { useMeasureType } from "../../../context/MeasureTypeContext"

// Define un objeto que mapea nombres de clima a índices válidos
const weatherIndexMap: Record<string, number> = {
	cloudy: 0,
	cloudyRainy: 1,
	rainy: 2,
	stormy: 3,
	sunny: 4,
	sunnyCloudy: 5,
}

const DailyWeatherCard: React.FC<TodaysWeatherProps> = ({ weatherData }) => {
	// Obtiene el índice correspondiente al tipo de clima
	const weatherIndex = weatherIndexMap[weatherData.icon || "dummyIndex"]

	const { measureType } = useMeasureType()

	// Obtiene la URL de la imagen del objeto de asignación usando el índice
	const weatherIconSrc = weatherIcons.images[weatherIndex]?.src || ""

	return (
		<div className="card bg-[--primary-color] card-compact">
			<div className="card-body flex flex-col items-center justify-between overflow-scroll min-w-[12%] p-1">
				<h2 className="font-bold">{weatherData.day}</h2>
				<img
					src={weatherIconSrc}
					alt={weatherData.weather}
					className="w-16 h-16"
				/>
				<p className="font-bold text-xs">
					{measureType === "Celsius"
						? `${weatherData.maxTemperatureC}°C`
						: `${weatherData.maxTemperatureF}°F`}
					{measureType === "Celsius"
						? `${weatherData.minTemperatureC}°C`
						: `${weatherData.minTemperatureF}°F`}
				</p>
			</div>
		</div>
	)
}

export default DailyWeatherCard
