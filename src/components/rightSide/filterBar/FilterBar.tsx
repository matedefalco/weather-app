import ColorModeSwitch from "./ColorModeSwitch"
import DayFilter from "./DayFilter"
import MeasureFilter from "./MeasureFilter"

const FilterBar = () => {
	return (
		<div className="flex  justify-between p-4">
			<div className="flex gap-4 items-center">
				<DayFilter />
				<MeasureFilter />
			</div>
			<ColorModeSwitch />
		</div>
	)
}

export default FilterBar
