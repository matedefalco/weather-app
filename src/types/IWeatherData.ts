import { PropsWithChildren } from "react"

// Definir un tipo para las props del proveedor del contexto
export type WeatherDataProviderProps = PropsWithChildren<object>

export interface TodaysWeatherData {
	temp_c?: number
	temp_f?: number
	feelslike_f?: number
	feelslike_c?: number
	wind_kph?: number
	text?: string
	icon?: string
	rainChances?: number
}

// Definir un tipo para el valor del contexto
export interface WeatherDataContextValue {
	today?: TodaysWeatherData
	tomorrow?: {
		rainChances?: number
		maxTemperatureC?: number
		maxTemperatureF?: number
		minTemperatureC?: number
		minTemperatureF?: number
	}
	pastTomorrow?: {
		rainChances?: number
		maxTemperatureC?: number
		maxTemperatureF?: number
		minTemperatureC?: number
		minTemperatureF?: number
	}
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
