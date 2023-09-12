import DailyWeatherCard from "./DailyWeatherCard"
import { WeeklyWeatherProps } from "../../../types/IWeatherData"

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({ weekWeatherData }) => {
	// Extrae las propiedades específicas que deseas mostrar
	const { today, tomorrow, pastTomorrow } = weekWeatherData

	// Crea un arreglo con los datos que quieres mostrar en los componentes
	const dailyWeatherData = [today, tomorrow, pastTomorrow]

	return (
		<div className="flex justify-center">
			<div className="flex gap-4 justify-between overflow-scroll">
				{dailyWeatherData.map(
					(dayData, index) =>
						// Verifica si dayData existe antes de renderizar el componente
						dayData && (
							<DailyWeatherCard
								key={index}
								day={dayData.day}
								maxTemperatureC={dayData.maxTemperatureC}
								maxTemperatureC={dayData.maxTemperatureC}
								minTemperatureF={dayData.minTemperatureF}
								minTemperatureF={dayData.minTemperatureF}
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
