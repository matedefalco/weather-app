import { useState, useEffect } from "react"
import { TWeatherInfo } from "../../types/TWeatherInfo"

const WeatherKPIs = () => {
	// const [weatherInfo, setWeatherInfo] = useState<TWeatherInfo>({
	const weatherInfo: TWeatherInfo = {
		temperature: 25,
		dayWeather: "Sunny",
		rainChances: 10,
	}

	const [currentTime, setCurrentTime] = useState(new Date())

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
			<p className="text-2xl text-xs font-bold">{weatherInfo.temperature}°C</p>
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
			<div className="flex">
				<p className="text-gray-400 text-xs flex-1">Day Weather:</p>
				<p className="text-xs font-bold">{weatherInfo.dayWeather}</p>
			</div>
			<div className="flex">
				<p className="text-gray-400 text-xs flex-1">Rain Chances:</p>
				<p className="text-xs font-bold">{weatherInfo.rainChances}%</p>
			</div>
		</div>
	)
}

export default WeatherKPIs
