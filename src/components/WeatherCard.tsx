import LeftSideColumn from "./leftSide/LeftSideColumn"
import RightSideColumn from "./rightSide/RightSideColumn"

const WeatherCard = () => {
	return (
		<div className="card w-[80%]  bg-base-100 text-primary-content p-0 text-black">
			<div className="card-body">
				<div className="flex lg:flex-row xs:flex-col">
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
