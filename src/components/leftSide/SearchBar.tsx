const SearchBar = () => {
	return (
		<div className="w-[90%]">
			<div className="join bg-gray-200 rounded-lg overflow-hidden w-full">
				<div className="flex w-full">
					<input
						className="grow input input-bordered join-item"
						placeholder="Search"
					/>
				</div>
				<div className="indicator">
					<button className="btn join-item">Search</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBar
