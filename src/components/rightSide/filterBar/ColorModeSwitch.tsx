import { useDarkMode } from "../../../context/DarkModeContext"
const ColorModeSwitch = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode()

	return (
		<div className="flex gap-2 items-center">
			<img src="/sunIcon.svg" alt="Sun" className="w-5 h-5" />
			<input
				type="checkbox"
				className="toggle"
				onClick={toggleDarkMode}
				checked={isDarkMode}
			/>
			<img src="/moonIcon.svg" alt="Moon" className="w-5 h-5 " />
		</div>
	)
}

export default ColorModeSwitch
