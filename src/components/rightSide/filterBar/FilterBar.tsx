import ColorModeSwitch from "./ColorModeSwitch"
import DayFilter from "./DayFilter"
import MeasureFilter from "./MeasureFilter"
import { FilterBarProps } from "../../../types/IFilter"

const FilterBar: React.FC<FilterBarProps> = ({ activeTab, setActiveTab }) => {
	return (
		<div className="flex justify-between">
			<div className="flex gap-4 items-center">
				<DayFilter setActiveTab={setActiveTab} activeTab={activeTab} />
				<MeasureFilter />
			</div>
			<ColorModeSwitch />
		</div>
	)
}

export default FilterBar
