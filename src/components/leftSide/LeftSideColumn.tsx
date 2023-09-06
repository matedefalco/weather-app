import LocationImage from "./LocationImage"
import SearchBar from "./SearchBar"
import WeatherImage from "./WeatherImage"
import WeatherKPIs from "./WeatherKPIs"

const LeftSideColumn = () => {
	return (
		<div className="w-full bg-base-100 flex flex-col justify-between h-full">
			<SearchBar />
			<WeatherImage />
			<WeatherKPIs />
			<LocationImage />
		</div>
	)
}

export default LeftSideColumn
