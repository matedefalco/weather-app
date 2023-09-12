import { useContext } from "react"
import LeftSideColumn from "./leftSide/LeftSideColumn"
import RightSideColumn from "./rightSide/RightSideColumn"
import { WeatherDataContext } from "../context/WeatherDataContext"
import {
	WeatherDataContextValue,
	WeeklyWeatherProps,
} from "../types/IWeatherData"

const WeatherLayout = () => {
	const currentWeatherData =
		useContext<WeatherDataContextValue>(WeatherDataContext)
	console.log(
		"Suka ~ file: WeatherLayout.tsx:9 ~ currentWeatherData:",
		currentWeatherData
	)

	const weatherData: WeeklyWeatherProps = {
		weekWeatherData: currentWeatherData,
	}
	return (
		<div className={`w-full bg-[--background-color] h-full p-8 `}>
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
				<div className="w-30 lg:w-[30%]">
					<LeftSideColumn data={weatherData.weekWeatherData.today} />
				</div>
				<div className="w-70 lg:w-[70%]">
					<RightSideColumn weekWeatherData={weatherData} />
				</div>
			</div>
		</div>
	)
}

export default WeatherLayout
