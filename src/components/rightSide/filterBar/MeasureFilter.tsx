const MeasureFilter = () => {
	return (
		<div className="p-4">
			<label className="btn btn-circle swap swap-rotate">
				{/* this hidden checkbox controls the state */}
				<input type="checkbox" />
				<p className="swap-off fill-current">ºC</p>
				<p className="swap-on fill-current">ºF</p>
			</label>
		</div>
	)
}

export default MeasureFilter
