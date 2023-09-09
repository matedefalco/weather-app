import React, { createContext, useState, useEffect } from "react"
import {
	WeatherDataContextValue,
	WeatherDataProviderProps,
} from "../types/IWeatherData"

// Create context
export const WeatherDataContext = createContext<
	WeatherDataContextValue | undefined
>(undefined)

// Proveedor del contexto
// Proveedor del contexto
export const WeatherDataProvider: React.FC<WeatherDataProviderProps> = ({
	children,
}) => {
	const [weatherData, setWeatherData] = useState<
		WeatherDataContextValue | undefined
	>(undefined)

	useEffect(() => {
		const apiKey = import.meta.env.VITE_WEATHER_API_KEY
		const location = "Buenos Aires"

		fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("La solicitud a la API falló")
				}
				return response.json()
			})
			.then((weatherApiResponse) => {
				setWeatherData({
					today: {
						temp_c: weatherApiResponse.current.temp_c,
						temp_f: weatherApiResponse.current.temp_f,
						feelslike_f: weatherApiResponse.current.feelslike_f,
						feelslike_c: weatherApiResponse.current.feelslike_c,
						wind_kph: weatherApiResponse.current.wind_kph,
						text: weatherApiResponse.current.condition.text,
						icon: weatherApiResponse.current.condition.icon,
						rainChances:
							weatherApiResponse.forecast.forecastday[0].day
								.daily_chance_of_rain,
					},
					tomorrow: {
						rainChances:
							weatherApiResponse.forecast.forecastday[1].day
								.daily_chance_of_rain,
						maxTemperatureC:
							weatherApiResponse.forecast.forecastday[1].day.maxtemp_c,
						minTemperatureC:
							weatherApiResponse.forecast.forecastday[1].day.mintemp_c,
						maxTemperatureF:
							weatherApiResponse.forecast.forecastday[1].day.maxtemp_f,
						minTemperatureF:
							weatherApiResponse.forecast.forecastday[1].day.mintemp_f,
					},
					pastTomorrow: {
						rainChances:
							weatherApiResponse.forecast.forecastday[2].day
								.daily_chance_of_rain,
						maxTemperatureC:
							weatherApiResponse.forecast.forecastday[1].day.maxtemp_c,
						minTemperatureC:
							weatherApiResponse.forecast.forecastday[1].day.mintemp_c,
						maxTemperatureF:
							weatherApiResponse.forecast.forecastday[1].day.maxtemp_f,
						minTemperatureF:
							weatherApiResponse.forecast.forecastday[1].day.mintemp_f,
					},
				})
			})
			.catch((fetchError) => {
				console.log(fetchError.message)
			})
	}, [])

	return (
		<WeatherDataContext.Provider value={weatherData}>
			{children}
		</WeatherDataContext.Provider>
	)
}
