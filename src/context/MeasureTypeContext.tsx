import React, { createContext, useContext, useState } from "react"
import {
	MeasureTypeContextValue,
	MeasureTypeProviderProps,
} from "../types/IMeasureType"

// Create context
export const MeasureTypeContext = createContext<
	MeasureTypeContextValue | undefined
>(undefined)

// Proveedor del contexto
export const MeasureTypeProvider: React.FC<MeasureTypeProviderProps> = ({
	children,
}) => {
	const [measureType, setMeasureType] = useState<string>("Celsius")

	const toggleMeasureType = () => {
		setMeasureType((prevType) =>
			prevType === "Celsius" ? "Fahrenheit" : "Celsius"
		)
	}

	return (
		<MeasureTypeContext.Provider value={{ measureType, toggleMeasureType }}>
			{children}
		</MeasureTypeContext.Provider>
	)
}

// Hook personalizado para acceder al contexto
export const useMeasureType = (): MeasureTypeContextValue => {
	const context = useContext(MeasureTypeContext)

	if (!context) {
		throw new Error(
			"useMeasureType debe usarse dentro de un MeasureTypeProvider"
		)
	}

	return context
}
