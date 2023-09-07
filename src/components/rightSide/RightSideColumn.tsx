import FilterBar from "./filterBar/FilterBar"
import WeatherStats from "./weatherStats/WeatherStats"
import WeeklyWeather from "./weekWeather/WeeklyWeather"

const RightSideColumn = () => {
	return (
		<div className="w-full bg-base-400 flex flex-col h-full bg-gray-200 p-8 gap-8">
			<FilterBar />
			<div className="h-full w-full flex flex-col justify-between">
				<WeeklyWeather />
				<WeatherStats />
			</div>
		</div>
	)
}

export default RightSideColumn
