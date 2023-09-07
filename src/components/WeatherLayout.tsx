import LeftSideColumn from "./leftSide/LeftSideColumn"
import RightSideColumn from "./rightSide/RightSideColumn"
import { useDarkMode } from "../context/DarkModeContext"

const WeatherLayout = () => {
	const { isDarkMode } = useDarkMode()

	return (
		<div
			className={`w-full h-full p-8 ${
				isDarkMode ? "bg-black" : "bg-slate-200"
			}`}
		>
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
