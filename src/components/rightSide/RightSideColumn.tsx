import FilterBar from "./filterBar/FilterBar"
import WeatherStats from "./weatherStats/WeatherStats"
import WeeklyWeather from "./weekWeather/WeeklyWeather"

const RightSideColumn = () => {
	return (
		<div className="w-full bg-base-400 flex flex-col justify-center">
			<FilterBar />
			<WeeklyWeather />
			<WeatherStats />
		</div>
	)
}

export default RightSideColumn
