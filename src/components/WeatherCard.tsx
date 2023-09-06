import LeftSideColumn from "./leftSide/LeftSideColumn"
import RightSideColumn from "./rightSide/RightSideColumn"

const WeatherCard = () => {
	return (
		<div className="card w-96 bg-base-100 text-primary-content p-0">
			<div className="card-body">
				<div className="flex">
					<div className="w-[30%]">
						<LeftSideColumn />
					</div>
					<div className="w-[70%]">
						<RightSideColumn />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherCard
