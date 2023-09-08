import { useMeasureType } from "../../../context/MeasureTypeContext"

const MeasureFilter = () => {
	const { toggleMeasureType } = useMeasureType()

	return (
		<div>
			<label className="btn btn-circle swap swap-rotate">
				{/* this hidden checkbox controls the state */}
				<input type="checkbox" onClick={toggleMeasureType} />
				<p className="swap-off fill-current">ºC</p>
				<p className="swap-on fill-current">ºF</p>
			</label>
		</div>
	)
}

export default MeasureFilter
