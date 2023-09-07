export interface DailyWeatherData {
	day: string
	temperature: number
	weather: string
	weatherIcon: string
	rainChances: number
}

export interface DayFilterProps {
	setActiveTab: (tabName: string) => void
	activeTab: string
}

export interface WeeklyWeatherProps {
	weekWeatherData: DailyWeatherData[]
}

export interface TodaysWeatherProps {
	weatherData: DailyWeatherData
}
