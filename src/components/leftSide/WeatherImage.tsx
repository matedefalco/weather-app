import { weatherIcons } from "../../assets/WeatherIcons"

const WeatherImage = () => {
	const selectedImage = weatherIcons.images[0]

	return (
		<div className="flex justify-center items-center">
			<img src={selectedImage.src} alt={selectedImage.alt} className="w-full" />
		</div>
	)
}

export default WeatherImage
