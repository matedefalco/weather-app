import { useState, useEffect } from "react"
import { useMeasureType } from "../../context/MeasureTypeContext.tsx"
import { TodaysWeatherProps } from "../../types/IWeatherData.ts"

const WeatherKPIs: React.FC<TodaysWeatherProps> = ({ weatherData }) => {
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
				{measureType == "Celsius"
					? `${weatherData.temp_c}ºC`
					: `${weatherData.temp_f}"ºF"`}
			</p>
			<div className="flex items-center gap-1">
				<p className="text-sm font-bold flex-none">
					{currentTime.toLocaleDateString()}
				</p>
				<p className="flex-none">-</p>
				<span className="countdown font-mono">
					<span
						style={{ "--value": currentTime.getHours() } as React.CSSProperties}
					/>
					:
					<span
						style={
							{ "--value": currentTime.getMinutes() } as React.CSSProperties
						}
					/>
					:
					<span
						style={
							{ "--value": currentTime.getSeconds() } as React.CSSProperties
						}
					/>
				</span>
			</div>
			<div className="w-[80%] border bg-gray-300 h-[0.5]" />
			<div className="flex gap-1">
				<p className="text-gray-400 text-xs flex-none">Day Weather:</p>
				<p className="text-xs font-bold">{weatherData.weather}</p>
			</div>
			<div className="flex gap-1">
				<p className="text-gray-400 text-xs flex-none">Wind:</p>
				<p className="text-xs font-bold">{weatherData.wind_kph}</p>
			</div>
		</div>
	)
}

export default WeatherKPIs
