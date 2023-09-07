export interface DailyWeatherData {
	day: string
	temperature: number
	weather: string
	weatherIcon: string
}

export interface DayFilterProps {
	setActiveTab: (tabName: string) => void
	activeTab: string
}
