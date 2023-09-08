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
	// Obtén el alt correspondiente al tipo de clima
	const alt = weatherAltMap[weatherData.weatherIcon]

	const { measureType } = useMeasureType()

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
					<p className="">{weatherData.day}</p>
					<div className="flex gap-1">
						<p className="flex-none">Temperature: </p>
						<p className="font-bold">
							{weatherData.temperature}
							{measureType == "Celsius" ? "°C" : "ºF"}
						</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Rain Chances: </p>
						<p className="font-bold">{weatherData.rainChances}%</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Feels Like Temperature: </p>
						<p className="font-bold">
							{measureType == "Celsius" ? "°C" : "ºF"}
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-end text-sm lg:text-md">
					<div className="flex gap-1">
						<p className="flex-none">Humidity: </p>
						<p className="font-bold">%</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Wind Strength: </p>
						<p className="font-bold">km/h</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">Wind Direction: </p>
						<p className="font-bold">direction</p>
					</div>
					<div className="flex gap-1">
						<p className="flex-none">UV Index: </p>
						<p className="font-bold">index</p>
					</div>
				</div>
				<WeatherChart />
				{/* <p>Humidity: {weatherData.humidity}%</p>
				<p>Wind Strength: {weatherData.windStrength} km/h</p>
				<p>Wind Direction: {weatherData.windDirection}</p>
				<p>UV Index: {weatherData.uvIndex}</p>
				<p>Feels Like Temperature: {weatherData.feelsLikeTemperature}°C</p> */}
			</div>
		</div>
	)
}

export default TodaysWeather
