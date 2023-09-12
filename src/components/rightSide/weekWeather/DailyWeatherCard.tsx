import React from "react"
import { TodaysWeatherProps } from "../../../types/IWeatherData"
import { useMeasureType } from "../../../context/MeasureTypeContext"

const DailyWeatherCard: React.FC<TodaysWeatherProps> = ({ weatherData }) => {
	const { measureType } = useMeasureType()

	return (
		<div className="card bg-[--primary-color] card-compact">
			<div className="card-body flex flex-col items-center justify-between overflow-scroll min-w-[12%] p-1">
				<h2 className="font-bold">{weatherData.day}</h2>
				<img
					src={weatherData.icon}
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
