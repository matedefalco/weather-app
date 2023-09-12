import { useState } from "react"
import FilterBar from "./filterBar/FilterBar"
import WeatherStats from "./weatherStats/WeatherStats"
import WeeklyWeather from "./weekWeather/WeeklyWeather"
import TodaysWeather from "./todayWeather/TodaysWeather"
import { WeeklyWeatherProps } from "../../types/IWeatherData"

const RightSideColumn: React.FC<WeeklyWeatherProps> = ({ weekWeatherData }) => {
	const [activeTab, setActiveTab] = useState("Today")

	return (
		<div className="w-full bg-base-400 flex flex-col h-full bg-[--secondary-color] p-8 gap-8 rounded-2xl">
			<FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className="h-full w-full flex flex-col justify-between gap-8">
				{activeTab === "Today" ? (
					<TodaysWeather weatherData={weekWeatherData.today} />
				) : (
					<WeeklyWeather weekWeatherData={weekWeatherData} />
				)}
				<WeatherStats />
			</div>
		</div>
	)
}

export default RightSideColumn
