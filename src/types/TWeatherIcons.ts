export type WeatherIconKey =
	| "cloudy"
	| "cloudyRainy"
	| "rainy"
	| "stormy"
	| "sunny"
	| "sunnyCloudy"

export type WeatherIcons = {
	[key in WeatherIconKey]: string
}
