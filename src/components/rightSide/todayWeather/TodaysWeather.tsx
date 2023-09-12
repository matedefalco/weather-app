import React from "react"
import { TodaysWeatherProps } from "../../../types/IWeatherData"
import { weatherIcons } from "../../../assets/WeatherIcons"
import WeatherChart from "./WeatherChart"
import { useMeasureType } from "../../../context/MeasureTypeContext"

// Define un objeto que mapea nombres de clima a alt correspondientes en weatherIcons.images
const weatherAltMap: Record<string, string> = {
	cloudy: "Cloudy",
	cloudyRainy: "CloudyRainy",
	rainy: "Rainy",
	stormy: "Stormy",
	sunny: "Sunny",
	sunnyCloudy: "SunnyCloudy",
}

const TodaysWeather: React.FC<TodaysWeatherProps> = ({ weatherData }) => {
	const { measureType } = useMeasureType()

	// Obtén el alt correspondiente al tipo de clima
	const alt = weatherAltMap[weatherData.icon || "dummyAlt"]

	// Busca la imagen correspondiente en weatherIcons.images usando el alt
	const weatherIconSrc =
		weatherIcons.images.find((image) => image.alt === alt)?.src || ""

	return (
		<div className="card card-side bg-[--primary-color] shadow-xl">
			<div className="card-body flex flex-col lg:flex-row items-center justify-between">
				<img
					src={weatherIconSrc}
					alt={weatherData.weather}
					className="w-32 h-32"
				/>
				<div className="flex flex-col justify-end text-sm lg:text-md">
					<h2 className="card-title">{weatherData.weather}</h2>
					<p>{weatherData.day}</p>
					<div className="flex gap-1">
						<p className="flex-none">Temperature: </p>
						<p className="font-bold">
							{measureType === "Celsius"
								? `${weatherData.temp_c}°C`
								: `${weatherData.temp_f}°F`}
						</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Rain Chances: </p>
						<p className="font-bold">{weatherData.rainChances}%</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Feels Like Temperature: </p>
						<p className="font-bold">
							{measureType === "Celsius"
								? `${weatherData.feelslike_c}°C`
								: `${weatherData.feelslike_f}°F`}
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-end text-sm lg:text-md">
					<div className="flex gap-1">
						<p className="flex-none">Humidity: </p>
						<p className="font-bold">{weatherData.humidity}%</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Wind Strength: </p>
						<p className="font-bold">
							{weatherData.wind_kph}
							km/h
						</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Wind Direction: </p>
						<p className="font-bold">{weatherData.windDirection}</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">UV Index: </p>
						<p className="font-bold">{weatherData.uvIndex}</p>
					</div>
				</div>
				<WeatherChart />
			</div>
		</div>
	)
}

export default TodaysWeather
