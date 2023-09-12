import { PropsWithChildren } from "react"

// Definir un tipo para las props del proveedor del contexto
export type LocationProviderProps = PropsWithChildren<object>

// Definir un tipo para el valor del contexto
export interface LocationContextValue {
	location: string
	toggleLocation: (location: string) => void
}
