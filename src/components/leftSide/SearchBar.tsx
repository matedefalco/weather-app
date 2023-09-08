const SearchBar = () => {
	return (
		<div className="w-[90%]">
			<div className="join bg-[--primary-color] rounded-lg overflow-hidden w-full">
				<div className="flex w-full">
					<input
						className="grow input input-bordered join-item bg-[--primary-color]"
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
