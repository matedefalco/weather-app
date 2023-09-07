import DailyWeatherCard from "./DailyWeatherCard"
import { WeeklyWeatherProps } from "../../../types/IWeatherData"

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({ weekWeatherData }) => {
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
						rainChances={dayData.rainChances}
					/>
				))}
			</div>
		</div>
	)
}

export default WeeklyWeather
