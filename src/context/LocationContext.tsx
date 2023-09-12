import React, { createContext, useContext, useState, useEffect } from "react"
import { LocationProviderProps, LocationContextValue } from "../types/ILocation"

// Create context
export const LocationContext = createContext<LocationContextValue | undefined>(
	undefined
)

// Proveedor del contexto
export const LocationProvider: React.FC<LocationProviderProps> = ({
	children,
}) => {
	const [location, setLocation] = useState<string>("Buenos Aires")

	useEffect(() => {
		const updatedContextValue: LocationContextValue = {
			location,
			toggleLocation,
		}
		setContextValue(updatedContextValue)
	}, [location])

	const toggleLocation = (newLocation: string) => {
		setLocation(newLocation)
	}

	// Estado para almacenar el valor del contexto actualizado
	const [contextValue, setContextValue] = useState<LocationContextValue>({
		location,
		toggleLocation,
	})

	return (
		<LocationContext.Provider value={contextValue}>
			{children}
		</LocationContext.Provider>
	)
}

// Hook personalizado para acceder al contexto
export const useLocation = (): LocationContextValue => {
	const context = useContext(LocationContext)

	if (!context) {
		throw new Error("useLocation debe usarse dentro de un LocationProvider")
	}

	return context
}
