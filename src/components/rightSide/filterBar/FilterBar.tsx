import ColorModeSwitch from "./ColorModeSwitch"
import DayFilter from "./DayFilter"
import MeasureFilter from "./MeasureFilter"
import { FilterBarProps } from "../../../types/IFilter"

const FilterBar: React.FC<FilterBarProps> = ({ activeTab, setActiveTab }) => {
	return (
		<div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-4">
			<div className="flex flex-col lg:flex-row gap-4 items-center">
				<DayFilter setActiveTab={setActiveTab} activeTab={activeTab} />
				<MeasureFilter />
			</div>
			<ColorModeSwitch />
		</div>
	)
}

export default FilterBar
