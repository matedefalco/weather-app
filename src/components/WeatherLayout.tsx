import LeftSideColumn from "./leftSide/LeftSideColumn"
import RightSideColumn from "./rightSide/RightSideColumn"

const WeatherLayout = () => {
	return (
		<div className="w-full h-full p-8 bg-base-100">
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
				<div className="w-30 lg:w-[30%]">
					<LeftSideColumn />
				</div>
				<div className="w-70 lg:w-[70%]">
					<RightSideColumn />
				</div>
			</div>
		</div>
	)
}

export default WeatherLayout
