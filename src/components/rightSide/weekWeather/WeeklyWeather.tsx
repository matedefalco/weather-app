import DailyWeatherCard from "./DailyWeatherCard"
import { DailyWeatherData } from "../../../types/IWeeklyWeather"

const WeeklyWeather = () => {
	// Datos de prueba para representar la información del clima para cada día de la semana
	const weekWeatherData: DailyWeatherData[] = [
		{ day: "Monday", temperature: 25, weather: "Sunny", weatherIcon: "sunny" },
		{
			day: "Tuesday",
			temperature: 23,
			weather: "Partly Cloudy",
			weatherIcon: "sunnyCloudy",
		},
		{
			day: "Wednesday",
			temperature: 20,
			weather: "Cloudy",
			weatherIcon: "cloudy",
		},
		{
			day: "Thursday",
			temperature: 22,
			weather: "Showers",
			weatherIcon: "rainy",
		},
		{ day: "Friday", temperature: 27, weather: "Sunny", weatherIcon: "sunny" },
		{
			day: "Saturday",
			temperature: 28,
			weather: "Storm",
			weatherIcon: "stormy",
		},
		{
			day: "Sunday",
			temperature: 26,
			weather: "Partly Cloudy",
			weatherIcon: "cloudyRainy",
		},
	]

	return (
		<div className="flex justify-center">
			<div className="flex gap-4 justify-between overflow-scroll">
				{weekWeatherData.map((dayData, index) => (
					<DailyWeatherCard
						key={index}
						day={dayData.day}
						temperature={dayData.temperature}
						weather={dayData.weather}
						weatherIcon={dayData.weatherIcon}
					/>
				))}
			</div>
		</div>
	)
}

export default WeeklyWeather
