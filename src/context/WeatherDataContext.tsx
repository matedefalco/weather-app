import React, { createContext, useState, useEffect } from "react"
import {
	WeatherDataContextValue,
	WeatherDataProviderProps,
	WeeklyWeatherProps,
} from "../types/IWeatherData"
import { useGetDay } from "../hooks/useGetDay"
import { useMeasureType } from "../context/MeasureTypeContext"

const initialValues = {
	weekWeatherData: {
		today: {
			day: "Today",
			temp_c: 0,
			temp_f: 0,
			feelslike_c: 0,
			feelslike_f: 0,
			weather: "Sunny",
			icon: "sunny",
			wind_kph: 0,
			rainChances: 0,
			maxTemperatureC: 0,
			maxTemperatureF: 0,
			minTemperatureC: 0,
			minTemperatureF: 0,
		},
		tomorrow: {
			day: "Tomorrow",
			weather: "Sunny",
			rainChances: 0,
			maxTemperatureC: 0,
			maxTemperatureF: 0,
			minTemperatureC: 0,
			minTemperatureF: 0,
		},
		pastTomorrow: {
			day: "Past tomorrow",
			weather: "Sunny",
			rainChances: 0,
			maxTemperatureC: 0,
			maxTemperatureF: 0,
			minTemperatureC: 0,
			minTemperatureF: 0,
		},
	},
}

// Create context
export const WeatherDataContext =
	createContext<WeeklyWeatherProps>(initialValues)

// Proveedor del contexto
export const WeatherDataProvider: React.FC<WeatherDataProviderProps> = ({
	children,
}) => {
	const today = useGetDay({ dayType: "today" })
	const tomorrow = useGetDay({ dayType: "tomorrow" })
	const pastTomorrow = useGetDay({ dayType: "pastTomorrow" })

	const measureType = useMeasureType()
	const [weatherAPIData, setWeatherAPIData] = useState<
		WeatherDataContextValue | undefined
	>(undefined)
	const [weatherDataState, setWeatherDataState] =
		useState<WeeklyWeatherProps>(initialValues)

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
				const weatherData: WeatherDataContextValue = {
					today: {
						day: today,
						temp_c: weatherApiResponse.current.temp_c,
						humidity: weatherApiResponse.current.humidity,
						temp_f: weatherApiResponse.current.temp_f,
						feelslike_f: weatherApiResponse.current.feelslike_f,
						feelslike_c: weatherApiResponse.current.feelslike_c,
						wind_kph: weatherApiResponse.current.wind_kph,
						text: weatherApiResponse.current.condition.text,
						icon: weatherApiResponse.current.condition.icon,
						windDirection: weatherApiResponse.current.wind_dir,
						uvIndex: weatherApiResponse.current.uv,
						rainChances:
							weatherApiResponse.forecast.forecastday[0].day
								.daily_chance_of_rain,
					},
					tomorrow: {
						day: tomorrow,
						weather: weatherApiResponse.forecast.forecastday[1].condition.text,
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
						day: pastTomorrow,
						weather: weatherApiResponse.forecast.forecastday[2].condition.text,
						rainChances:
							weatherApiResponse.forecast.forecastday[2].day
								.daily_chance_of_rain,
						maxTemperatureC:
							weatherApiResponse.forecast.forecastday[2].day.maxtemp_c,
						minTemperatureC:
							weatherApiResponse.forecast.forecastday[2].day.mintemp_c,
						maxTemperatureF:
							weatherApiResponse.forecast.forecastday[2].day.maxtemp_f,
						minTemperatureF:
							weatherApiResponse.forecast.forecastday[2].day.mintemp_f,
					},
				}
				setWeatherAPIData(weatherData)
			})
			.catch((fetchError) => {
				console.log(fetchError.message)
			})
	}, [today])

	useEffect(() => {
		// Actualizar el componente cuando cambie weatherData
		if (weatherAPIData !== undefined && weatherAPIData.today !== undefined) {
			const temp_c = weatherAPIData.today.temp_c
			const temp_f = weatherAPIData.today.temp_f
			const finalTemperatureC = typeof temp_c === "number" ? temp_c : 0
			const finalTemperatureF = typeof temp_f === "number" ? temp_f : 0

			const feelslike_c =
				measureType.measureType === "Celsius"
					? weatherAPIData.today.feelslike_c
					: measureType.measureType === "Fahrenheit"
					? weatherAPIData.today.feelslike_f
					: 0

			const finalFeelslike_c = typeof feelslike_c === "number" ? feelslike_c : 0

			const feelslike_f =
				measureType.measureType === "Celsius"
					? weatherAPIData.today.feelslike_c
					: measureType.measureType === "Fahrenheit"
					? weatherAPIData.today.feelslike_f
					: 0

			const finalFeelslike_f = typeof feelslike_f === "number" ? feelslike_f : 0

			const weather =
				weatherAPIData.today.text !== undefined
					? weatherAPIData.today.text
					: "Weather"
			const windSpeed = weatherAPIData.today.wind_kph
				? `${weatherAPIData.today.wind_kph} kph`
				: "0 kph"
			const weatherIcon = weatherAPIData.today.icon || "sunny"
			const rainChances = weatherAPIData.today.rainChances || 0

			const tomorrowRainChances = weatherAPIData.tomorrow?.rainChances || 0
			const tomorrowMaxTemperatureC =
				weatherAPIData.tomorrow?.maxTemperatureC || 0
			const tomorrowMaxTemperatureF =
				weatherAPIData.tomorrow?.maxTemperatureF || 0
			const tomorrowMinTemperatureC =
				weatherAPIData.tomorrow?.minTemperatureC || 0
			const tomorrowMinTemperatureF =
				weatherAPIData.tomorrow?.minTemperatureF || 0

			const pastTomorrowRainChances =
				weatherAPIData.pastTomorrow?.rainChances || 0
			const pastTomorrowMaxTemperatureC =
				weatherAPIData.pastTomorrow?.maxTemperatureC || 0
			const pastTomorrowMaxTemperatureF =
				weatherAPIData.pastTomorrow?.maxTemperatureF || 0
			const pastTomorrowMinTemperatureC =
				weatherAPIData.pastTomorrow?.minTemperatureC || 0
			const pastTomorrowMinTemperatureF =
				weatherAPIData.pastTomorrow?.minTemperatureF || 0

			setWeatherDataState((prevData) => ({
				...prevData,
				weekWeatherData: {
					...prevData.weekWeatherData,
					today: {
						...prevData.weekWeatherData.today,
						temp_c: finalTemperatureC,
						temp_f: finalTemperatureF,
						feelslike_c: finalFeelslike_c,
						feelslike_f: finalFeelslike_f,
						weatherIcon,
						weather,
						windSpeed,
						rainChances,
					},
					tomorrow: {
						...prevData.weekWeatherData.tomorrow,
						rainChances: tomorrowRainChances,
						maxTemperatureC: tomorrowMaxTemperatureC,
						maxTemperatureF: tomorrowMaxTemperatureF,
						minTemperatureC: tomorrowMinTemperatureC,
						minTemperatureF: tomorrowMinTemperatureF,
					},
					pastTomorrow: {
						...prevData.weekWeatherData.pastTomorrow,
						rainChances: pastTomorrowRainChances,
						maxTemperatureC: pastTomorrowMaxTemperatureC,
						maxTemperatureF: pastTomorrowMaxTemperatureF,
						minTemperatureC: pastTomorrowMinTemperatureC,
						minTemperatureF: pastTomorrowMinTemperatureF,
					},
				},
			}))
		}
	}, [weatherAPIData, measureType])

	return (
		<WeatherDataContext.Provider value={weatherDataState}>
			{children}
		</WeatherDataContext.Provider>
	)
}
