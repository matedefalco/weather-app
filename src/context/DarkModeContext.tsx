import React, { createContext, useContext, useState, useEffect } from "react"
import { DarkModeProviderProps, DarkModeContextValue } from "../types/IDarkMode"

// Create context
export const DarkModeContext = createContext<DarkModeContextValue | undefined>(
	undefined
)

// Proveedor del contexto
export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode)
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	)
}

// Hook personalizado para acceder al contexto
export const useDarkMode = (): DarkModeContextValue => {
	const context = useContext(DarkModeContext)

	useEffect(() => {
		if (context?.isDarkMode) {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [context?.isDarkMode])

	if (!context) {
		throw new Error("useDarkMode debe usarse dentro de un DarkModeProvider")
	}

	return context
}
