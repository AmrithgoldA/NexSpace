import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./components/LoginPage/Login"
import Profile from "./components/ProfilePage/Profile"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path = "/" element = {<Login/>} />
					<Route path = "/profile" element = {<Profile/>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
