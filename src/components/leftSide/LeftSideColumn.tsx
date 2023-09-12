import { TodaysWeatherData } from "../../types/IWeatherData"
import LocationImage from "./LocationImage"
import SearchBar from "./SearchBar"
import WeatherImage from "./WeatherImage"
import WeatherKPIs from "./WeatherKPIs"

const LeftSideColumn: React.FC<TodaysWeatherData> = (data) => {
	return (
		<div className="w-full bg-[--background-color] flex flex-col gap-4 items-center justify-between h-full">
			<SearchBar />
			<WeatherImage />
			<WeatherKPIs weatherData={data} />
			<LocationImage locationName="Buenos Aires Capital" />
		</div>
	)
}

export default LeftSideColumn
