import React, { useState } from "react"
import { useLocation } from "../../context/LocationContext"

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState<string>("")
	const locationContext = useLocation()
	const { toggleLocation } = locationContext

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value)
	}

	const handleSearchClick = () => {
		toggleLocation(searchInput)
	}

	return (
		<div className="w-[90%]">
			<div className="join bg-[--primary-color] rounded-lg overflow-hidden w-full">
				<div className="flex w-full">
					<input
						className="grow input input-bordered join-item bg-[--primary-color]"
						placeholder="Search"
						value={searchInput}
						onChange={handleInputChange}
					/>
				</div>
				<div className="indicator">
					<button
						className="btn join-item border-solid border-2 border-l-1 border-[#cccfd6ff] dark:bg-slate-200"
						onClick={handleSearchClick}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBar
