import { useState } from "react"
import FilterBar from "./filterBar/FilterBar"
import WeatherStats from "./weatherStats/WeatherStats"
import WeeklyWeather from "./weekWeather/WeeklyWeather"
import TodaysWeather from "./todayWeather/TodaysWeather"

const RightSideColumn = () => {
	const [activeTab, setActiveTab] = useState("Today")

	return (
		<div className="w-full bg-base-400 flex flex-col h-full bg-gray-200 p-8 gap-8">
			<FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className="h-full w-full flex flex-col justify-between">
				{activeTab === "Today" ? <TodaysWeather /> : <WeeklyWeather />}
				<WeatherStats />
			</div>
		</div>
	)
}

export default RightSideColumn
