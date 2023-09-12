import { PropsWithChildren, ReactNode } from "react"

// Definir un tipo para las props del proveedor del contexto
export type WeatherDataProviderProps = PropsWithChildren<object>

export interface TodaysWeatherData {
	day?: ReactNode | string
	humidity?: number
	windDirection?: number
	uvIndex?: number
	weather?: string
	temp_c?: number
	temp_f?: number
	feelslike_f?: number
	feelslike_c?: number
	wind_kph?: number
	text?: string
	icon?: string
	rainChances?: number
	maxTemperatureC?: number
	maxTemperatureF?: number
	minTemperatureC?: number
	minTemperatureF?: number
}

export interface ForecastWeatherData {
	day?: ReactNode | string
	weather: string
	rainChances?: number
	maxTemperatureC?: number
	maxTemperatureF?: number
	minTemperatureC?: number
	minTemperatureF?: number
}

// Definir un tipo para el valor del contexto
export interface WeatherDataContextValue {
	today?: TodaysWeatherData
	tomorrow?: ForecastWeatherData
	pastTomorrow?: ForecastWeatherData
}

export interface DayFilterProps {
	setActiveTab: (tabName: string) => void
	activeTab: string
}

export interface WeeklyWeatherProps {
	weekWeatherData: WeatherDataContextValue
}

export interface TodaysWeatherProps {
	weatherData: TodaysWeatherData
}
