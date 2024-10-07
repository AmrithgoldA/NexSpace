import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./components/LoginPage/Login"
import Profile from "./components/ProfilePage/Profile"
import { useEffect, useState } from "react";

function App() {

	const [isDark, setIsDark] = useState("")

	useEffect(() => {

		const darkModeBasedOnBrowser = () => {
			console.log( window.matchMedia("(prefers-color-scheme: dark)"));
			
			if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setIsDark("dark")
			} else {
				setIsDark("light")
			}
		}

		darkModeBasedOnBrowser()
		
	}, [])


	return (
		<div className={isDark}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
