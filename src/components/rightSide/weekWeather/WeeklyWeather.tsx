import DailyWeatherCard from "./DailyWeatherCard"
import { WeeklyWeatherProps } from "../../../types/IWeatherData"

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({ weekWeatherData }) => {
	// Extrae las propiedades específicas que deseas mostrar
	const { today, tomorrow, pastTomorrow } = weekWeatherData

	// Crea un arreglo con los datos que quieres mostrar en los componentes
	const dailyWeatherData = [today, tomorrow, pastTomorrow]
	console.log(
		"Suka ~ file: WeeklyWeather.tsx:10 ~ dailyWeatherData:",
		dailyWeatherData
	)

	return (
		<div className="flex justify-center">
			<div className="flex gap-4 justify-between overflow-scroll">
				{dailyWeatherData.map(
					(dayData, index) =>
						dayData && (
							<DailyWeatherCard
								key={index}
								day={dayData.day}
								minTemperatureC={dayData.minTemperatureC}
								maxTemperatureC={dayData.maxTemperatureC}
								minTemperatureF={dayData.minTemperatureF}
								maxTemperatureF={dayData.maxTemperatureF}
								weather={dayData.weather}
								weatherIcon={dayData.icon}
								rainChances={dayData.rainChances}
							/>
						)
				)}
			</div>
		</div>
	)
}

export default WeeklyWeather
