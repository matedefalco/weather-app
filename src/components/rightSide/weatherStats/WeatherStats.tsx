import AirQualityCard from "./AirQualityCard"
import HumidtyCard from "./HumidtyCard"
import SunStatus from "./SunStatus"
import UVIndexCard from "./UVIndexCard"
import VisibilityCard from "./VisibilityCard"
import WindStatusCard from "./WindStatusCard"

const WeatherStats = () => {
	return (
		<div className="grid grid-rows-3 grid-flow-col gap-4">
			<UVIndexCard />
			<WindStatusCard />
			<SunStatus />
			<HumidtyCard />
			<VisibilityCard />
			<AirQualityCard />
		</div>
	)
}

export default WeatherStats
