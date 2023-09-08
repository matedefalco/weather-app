import { useState } from "react"
import FilterBar from "./filterBar/FilterBar"
import WeatherStats from "./weatherStats/WeatherStats"
import WeeklyWeather from "./weekWeather/WeeklyWeather"
import TodaysWeather from "./todayWeather/TodaysWeather"
import { DailyWeatherData } from "../../types/IWeatherData"

const RightSideColumn = () => {
	const [activeTab, setActiveTab] = useState("Today")

	// Datos de prueba para representar la información del clima para cada día de la semana
	const weekWeatherData: DailyWeatherData[] = [
		{
			day: "Monday",
			temperature: 25,
			weather: "Sunny",
			weatherIcon: "sunny",
			rainChances: 0,
		},
		{
			day: "Tuesday",
			temperature: 23,
			weather: "Partly Cloudy",
			weatherIcon: "sunnyCloudy",
			rainChances: 0,
		},
		{
			day: "Wednesday",
			temperature: 20,
			weather: "Cloudy",
			weatherIcon: "cloudy",
			rainChances: 0,
		},
		{
			day: "Thursday",
			temperature: 22,
			weather: "Showers",
			weatherIcon: "rainy",
			rainChances: 0,
		},
		{
			day: "Friday",
			temperature: 27,
			weather: "Sunny",
			weatherIcon: "sunny",
			rainChances: 0,
		},
		{
			day: "Saturday",
			temperature: 28,
			weather: "Storm",
			weatherIcon: "stormy",
			rainChances: 0,
		},
		{
			day: "Sunday",
			temperature: 26,
			weather: "Partly Cloudy",
			weatherIcon: "cloudyRainy",
			rainChances: 0,
		},
	]

	// Datos de prueba para el clima de hoy
	const todaysWeatherData: DailyWeatherData = {
		day: "Monday",
		temperature: 28,
		weather: "Sunny",
		weatherIcon: "sunny",
		rainChances: 0,
	}

	return (
		<div className="w-full bg-base-400 flex flex-col h-full bg-[--secondary-color] p-8 gap-8 rounded-2xl">
			<FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className="h-full w-full flex flex-col justify-between gap-8">
				{activeTab === "Today" ? (
					<TodaysWeather weatherData={todaysWeatherData} />
				) : (
					<WeeklyWeather weekWeatherData={weekWeatherData} />
				)}
				<WeatherStats />
			</div>
		</div>
	)
}

export default RightSideColumn
