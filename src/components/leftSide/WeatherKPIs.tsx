import { useState, useEffect } from "react"
import { DailyWeatherData } from "../../types/IWeatherData.tsx"
import { useMeasureType } from "../../context/MeasureTypeContext.tsx"

const WeatherKPIs = () => {
	// const [weatherInfo, setWeatherInfo] = useState<TWeatherInfo>({
	const weatherInfo: DailyWeatherData = {
		day: "Monday",
		temperature: 25,
		weather: "Sunny",
		weatherIcon: "sunny",
		rainChances: 10,
	}

	const [currentTime, setCurrentTime] = useState(new Date())

	const { measureType } = useMeasureType()

	useEffect(() => {
		// Actualizar la hora actual cada segundo
		const intervalId = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)

		// Limpieza del intervalo cuando se desmonta el componente
		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className="flex flex-col gap-2 w-[80%] px-2">
			<p className="text-2xl font-bold">
				{weatherInfo.temperature}
				{measureType == "Celsius" ? "°C" : "ºF"}
			</p>
			<div className="flex items-center gap-1">
				<p className="text-sm font-bold flex-none">
					{currentTime.toLocaleDateString()}
				</p>
				<p className="flex-none">-</p>
				<span className="countdown font-mono ">
					<span style={{ "--value": currentTime.getHours() }}></span>:
					<span style={{ "--value": currentTime.getMinutes() }}></span>:
					<span style={{ "--value": currentTime.getSeconds() }}></span>
				</span>
			</div>
			<div className="w-[80%] border bg-gray-300 h-[0.5]" />
			<div className="flex gap-1">
				<p className="text-gray-400 text-xs flex-none">Day Weather:</p>
				<p className="text-xs font-bold">{weatherInfo.weather}</p>
			</div>
			<div className="flex gap-1">
				<p className="text-gray-400 text-xs flex-none">Rain Chances:</p>
				<p className="text-xs font-bold">{weatherInfo.rainChances}%</p>
			</div>
		</div>
	)
}

export default WeatherKPIs
