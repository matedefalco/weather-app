import AirQualityCard from "./AirQualityCard"
import HumidtyCard from "./HumidtyCard"
import SunStatus from "./SunStatus"
import UVIndexCard from "./UVIndexCard"
import VisibilityCard from "./VisibilityCard"
import WindStatusCard from "./WindStatusCard"

const WeatherStats = () => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-bold text-2xl">Today's Highlights</h1>
			<div className="grid grid-rows-3 grid-flow-col gap-4">
				<UVIndexCard />
				<WindStatusCard />
				<SunStatus />
				<HumidtyCard />
				<VisibilityCard />
				<AirQualityCard />
			</div>
		</div>
	)
}

export default WeatherStats
