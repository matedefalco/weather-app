import LocationImage from "./LocationImage"
import SearchBar from "./SearchBar"
import WeatherImage from "./WeatherImage"
import WeatherKPs from "./WeatherKPs"

const LeftSideColumn = () => {
	return (
		<div className="w-full bg-base-100 flex flex-col justify-between h-full">
			<SearchBar />
			<WeatherImage />
			<WeatherKPs />
			<LocationImage />
		</div>
	)
}

export default LeftSideColumn
