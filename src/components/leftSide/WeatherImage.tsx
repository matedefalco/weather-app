import { TWeatherImages, TWeatherImage } from "../../types/IWeatherImages"

const weatherImages: TWeatherImages = {
	images: [
		{
			src: "/cloudy.svg",
			alt: "Cloudy",
		},
		{
			src: "/night.svg",
			alt: "Night",
		},
		{
			src: "/rainy.svg",
			alt: "Rainy",
		},
		{
			src: "/stormy.svg",
			alt: "Stormy",
		},
		{
			src: "/cloudyRainy.svg",
			alt: "CloudyRainy",
		},
		{
			src: "/sunyCloudy.svg",
			alt: "SunyCloudy",
		},
		{
			src: "/sunny.svg",
			alt: "Sunny",
		},
	],
}

const WeatherImage = () => {
	return (
		<div className="flex justify-center items-center">
			<img
				src={weatherImages.images[0].src}
				alt={weatherImages.images[0].alt}
				style={{ maxWidth: "100px" }}
			/>
		</div>
	)
}

export default WeatherImage
