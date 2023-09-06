import DayFilter from "./DayFilter"
import MeasureFilter from "./MeasureFilter"

const FilterBar = () => {
	return (
		<div className="flex  justify-between">
			<DayFilter />
			<MeasureFilter />
		</div>
	)
}

export default FilterBar
