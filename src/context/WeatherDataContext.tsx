import React, { createContext, useState, useEffect } from "react"
import {
	WeatherDataContextValue,
	WeatherDataProviderProps,
} from "../types/IWeatherData"
import { useGetDay } from "../hooks/useGetDay"

const initialValues: WeatherDataContextValue = {
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
}

// Create context
export const WeatherDataContext =
	createContext<WeatherDataContextValue>(initialValues)

// Proveedor del contexto
export const WeatherDataProvider: React.FC<WeatherDataProviderProps> = ({
	children,
}) => {
	const today = useGetDay({ dayType: "today" })
	const tomorrow = useGetDay({ dayType: "tomorrow" })
	const pastTomorrow = useGetDay({ dayType: "pastTomorrow" })

	const [weatherAPIData, setWeatherAPIData] = useState<
		WeatherDataContextValue | undefined
	>(undefined)
	const [weatherDataState, setWeatherDataState] =
		useState<WeatherDataContextValue>(initialValues)

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
				console.log(
					"Suka ~ file: WeatherDataContext.tsx:76 ~ weatherApiResponse 2:",
					weatherApiResponse.forecast.forecastday[1]
				)
				const weatherData: WeatherDataContextValue = {
					today: {
						day: today,
						temp_c: weatherApiResponse.current.temp_c,
						humidity: weatherApiResponse.current.humidity,
						temp_f: weatherApiResponse.current.temp_f,
						feelslike_f: weatherApiResponse.current.feelslike_f,
						feelslike_c: weatherApiResponse.current.feelslike_c,
						wind_kph: weatherApiResponse.current.wind_kph,
						weather: weatherApiResponse.current.condition.text,
						icon: weatherApiResponse.current.condition.icon,
						windDirection: weatherApiResponse.current.wind_dir,
						uvIndex: weatherApiResponse.current.uv,
						rainChances:
							weatherApiResponse.forecast.forecastday[0].day
								.daily_chance_of_rain,
					},
					tomorrow: {
						day: tomorrow,
						icon: weatherApiResponse.forecast.forecastday[1].day.condition.icon,
						weather:
							weatherApiResponse.forecast.forecastday[1].day.condition.text,
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
						icon: weatherApiResponse.forecast.forecastday[2].day.condition.icon,
						weather:
							weatherApiResponse.forecast.forecastday[2].day.condition.text,
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
				console.log(
					"Suka ~ file: WeatherDataContext.tsx:125 ~ weatherAPIData:",
					weatherAPIData
				)
			})
			.catch((fetchError) => {
				console.log(fetchError.message)
			})
	}, [today])

	useEffect(() => {
		if (weatherAPIData !== undefined && weatherAPIData.today !== undefined) {
			const temp_c = weatherAPIData.today.temp_c
			const temp_f = weatherAPIData.today.temp_f
			const finalTemperatureC = typeof temp_c === "number" ? temp_c : 0
			const finalTemperatureF = typeof temp_f === "number" ? temp_f : 0

			const feelslike_c = weatherAPIData.today.feelslike_c
				? weatherAPIData.today.feelslike_c
				: 0
			const finalFeelslike_c = typeof feelslike_c === "number" ? feelslike_c : 0
			const feelslike_f = weatherAPIData.today.feelslike_f
				? weatherAPIData.today.feelslike_c
				: 0
			const finalFeelslike_f = typeof feelslike_f === "number" ? feelslike_f : 0

			const windSpeed = weatherAPIData.today.wind_kph
				? weatherAPIData.today.wind_kph
				: 0
			const windDirection = weatherAPIData.today.windDirection
				? weatherAPIData.today.windDirection
				: "NorthEast"
			const humidity = weatherAPIData.today.humidity
				? weatherAPIData.today.humidity
				: 0
			const uvIndex = weatherAPIData.today.uvIndex
				? weatherAPIData.today.uvIndex
				: 0

			const todayWeather = weatherAPIData.today.weather
				? weatherAPIData.today.weather
				: "Weather"
			const todayIcon = weatherAPIData.today.icon || "sunny"
			const todayRainChances = weatherAPIData.today?.rainChances || 0
			const todayMaxTemperatureC = weatherAPIData.today?.maxTemperatureC || 0
			const todayMaxTemperatureF = weatherAPIData.today?.maxTemperatureF || 0
			const todayMinTemperatureC = weatherAPIData.today?.minTemperatureC || 0
			const todayMinTemperatureF = weatherAPIData.today?.minTemperatureF || 0

			const tomorrowWeather =
				weatherAPIData.tomorrow && weatherAPIData.tomorrow.weather
					? weatherAPIData.tomorrow.weather
					: "Weather"
			const tomorrowIcon = weatherAPIData.tomorrow.icon || "sunny"

			const tomorrowRainChances = weatherAPIData.tomorrow?.rainChances || 0
			const tomorrowMaxTemperatureC =
				weatherAPIData.tomorrow?.maxTemperatureC || 0
			const tomorrowMaxTemperatureF =
				weatherAPIData.tomorrow?.maxTemperatureF || 0
			const tomorrowMinTemperatureC =
				weatherAPIData.tomorrow?.minTemperatureC || 0
			const tomorrowMinTemperatureF =
				weatherAPIData.tomorrow?.minTemperatureF || 0

			const pastTomorrowWeather =
				weatherAPIData.pastTomorrow && weatherAPIData.pastTomorrow.weather
					? weatherAPIData.pastTomorrow.weather
					: "Weather"
			const pastTomorrowIcon = weatherAPIData.pastTomorrow.icon || "sunny"
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
				today: {
					...prevData.today,
					day: today,
					humidity,
					windDirection,
					uvIndex,
					weather: todayWeather,
					temp_c: finalTemperatureC,
					temp_f: finalTemperatureF,
					feelslike_f: finalFeelslike_f,
					feelslike_c: finalFeelslike_c,
					wind_kph: windSpeed,
					icon: todayIcon,
					rainChances: todayRainChances,
					maxTemperatureC: todayMaxTemperatureC,
					maxTemperatureF: todayMaxTemperatureF,
					minTemperatureC: todayMinTemperatureC,
					minTemperatureF: todayMinTemperatureF,
				},
				tomorrow: {
					...prevData.tomorrow,
					weather: tomorrowWeather,
					icon: tomorrowIcon,
					rainChances: tomorrowRainChances,
					maxTemperatureC: tomorrowMaxTemperatureC,
					maxTemperatureF: tomorrowMaxTemperatureF,
					minTemperatureC: tomorrowMinTemperatureC,
					minTemperatureF: tomorrowMinTemperatureF,
				},
				pastTomorrow: {
					...prevData.pastTomorrow,
					weather: pastTomorrowWeather,
					icon: pastTomorrowIcon,
					rainChances: pastTomorrowRainChances,
					maxTemperatureC: pastTomorrowMaxTemperatureC,
					maxTemperatureF: pastTomorrowMaxTemperatureF,
					minTemperatureC: pastTomorrowMinTemperatureC,
					minTemperatureF: pastTomorrowMinTemperatureF,
				},
			}))
		}
	}, [weatherAPIData])

	return (
		<WeatherDataContext.Provider value={weatherDataState}>
			{children}
		</WeatherDataContext.Provider>
	)
}
