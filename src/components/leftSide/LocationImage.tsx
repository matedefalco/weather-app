import React, { useEffect, useState } from "react"
import { LocationImageProps } from "../../types/ILocationImage"

const LocationImage: React.FC<LocationImageProps> = ({ locationName }) => {
	const [imageUrl, setImageUrl] = useState<string>("")

	useEffect(() => {
		// Define tu clave de API de Google Custom Search
		const apiKey = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_API_KEY
		// Define tu ID de búsqueda personalizado de Google
		const cx = import.meta.env.VITE_GOOGLE_CX

		// URL base de Google Custom Search
		const baseUrl = `https://www.googleapis.com/customsearch/v1?q=${locationName}&key=${apiKey}&cx=${cx}&searchType=image`

		// Realiza la solicitud a la API de Google Custom Search
		fetch(baseUrl)
			.then((response) => response.json())
			.then((data) => {
				// Verifica si se encontraron resultados de imágenes
				if (data.items && data.items.length > 0) {
					// Obtiene la URL de la primera imagen encontrada
					const firstImage = data.items[0]
					setImageUrl(firstImage.link)
				}
			})
			.catch((error) => {
				console.error("Error al buscar la imagen:", error)
			})
	}, [locationName])

	return (
		<div className="rounded-2xl shadow-md w-[80%] h-24 relative">
			{imageUrl ? (
				<>
					<img
						src={imageUrl}
						alt={locationName}
						className="object-fit h-full w-full rounded-2xl fill-white"
					/>
					<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
						<div className="bg-black bg-opacity-50 rounded-2xl w-full h-full flex items-center justify-center">
							<p className="flex justify-center ">{locationName}</p>
						</div>
					</div>
				</>
			) : (
				<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
					<div className="bg-black bg-opacity-50 rounded-2xl w-full h-full flex items-center justify-center">
						<p className="flex justify-center text-gray-200 p-2 text-center">
							No se encontró una imagen para esta ubicación.
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default LocationImage
