import { DayFilterProps } from "../../../types/IWeatherData"

const DayFilter: React.FC<DayFilterProps> = ({ setActiveTab, activeTab }) => {
	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName)
	}

	return (
		<div className="tabs flex items-center">
			<a
				className={`tab tab-bordered dark:text-white ${
					activeTab === "Today" ? "tab-active" : ""
				}`}
				onClick={() => handleTabClick("Today")}
			>
				Today
			</a>
			<a
				className={`tab tab-bordered dark:text-white ${
					activeTab === "Week" ? "tab-active" : ""
				}`}
				onClick={() => handleTabClick("Week")}
			>
				Week
			</a>
		</div>
	)
}

export default DayFilter
