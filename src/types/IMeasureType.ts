import { PropsWithChildren } from "react"

// Definir un tipo para las props del proveedor del contexto
export type MeasureTypeProviderProps = PropsWithChildren<object>

// Definir un tipo para el valor del contexto
export interface MeasureTypeContextValue {
	measureType: string
	toggleMeasureType: () => void
}
