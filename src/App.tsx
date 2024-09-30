import { Route, Routes, BrowserRouter } from "react-router-dom"
import LoginPage from "./components/LoginPage/Login"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path = "/" element = {<LoginPage/>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
