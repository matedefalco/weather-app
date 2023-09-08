import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { DarkModeProvider } from "./context/DarkModeContext.tsx"
import { MeasureTypeProvider } from "./context/MeasureTypeContext.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MeasureTypeProvider>
			<DarkModeProvider>
				<App />
			</DarkModeProvider>
		</MeasureTypeProvider>
	</React.StrictMode>
)
