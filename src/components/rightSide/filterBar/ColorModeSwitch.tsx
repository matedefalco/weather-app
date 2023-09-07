const ColorModeSwitch = () => {
	return (
		<div className="flex gap-2 items-center">
			{/* sun icon */}
			<img src="/sunIcon.svg" alt="Sun" className="w-5 h-5" />
			<input type="checkbox" className="toggle" />
			{/* moon icon */}
			<img src="/moonIcon.svg" alt="Moon" className="w-5 h-5" />
		</div>
	)
}

export default ColorModeSwitch
