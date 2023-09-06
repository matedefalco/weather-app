import FilterBar from "./filterBar/FilterBar"
import WeatherStats from "./weatherStats/WeatherStats"
import WeeklyWeather from "./weekWeather/WeeklyWeather"

const RightSideColumn = () => {
	return (
		<div className="w-full bg-base-400 flex flex-col justify-between h-full bg-gray-200">
			<FilterBar />
			<WeeklyWeather />
			<WeatherStats />
		</div>
	)
}

export default RightSideColumn
