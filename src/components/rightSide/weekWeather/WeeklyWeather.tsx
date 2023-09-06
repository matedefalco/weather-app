import DailyWeatherCard from "./DailyWeatherCard"

const WeeklyWeather = () => {
	return (
		<div className="flex flex-col justify-center">
			<h1>Today´s Highlights</h1>
			<div className="flex gap-4 justify-center">
				<DailyWeatherCard />
			</div>
		</div>
	)
}

export default WeeklyWeather
