import { useState } from "react"

const DayFilter = () => {
	const [activeTab, setActiveTab] = useState<string>("Today")

	const handleTabClick = (tabName: string): void => {
		setActiveTab(tabName)
	}

	return (
		<div className="tabs p-4">
			<a
				className={`tab tab-bordered ${
					activeTab === "Today" ? "tab-active" : ""
				}`}
				onClick={() => handleTabClick("Today")}
			>
				Today
			</a>
			<a
				className={`tab tab-bordered ${
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
