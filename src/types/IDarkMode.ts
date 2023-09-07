import { PropsWithChildren } from "react"

// Definir un tipo para las props del proveedor del contexto
export type DarkModeProviderProps = PropsWithChildren<object>

// Definir un tipo para el valor del contexto
export interface DarkModeContextValue {
	isDarkMode: boolean
	toggleDarkMode: () => void
}
