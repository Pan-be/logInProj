import React, { useState, useEffect } from "react"

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
    onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
		const dupa = localStorage.getItem("isLoggedOn")

		if (dupa === "1") {
			setIsLoggedIn(true)
		}
	}, [])

	const logoutHandler = (pops) => {
        localStorage.removeItem("isLoggedOn")
        setIsLoggedIn(false)
	}
    
	const loginHandler = () => {
        localStorage.setItem("isLoggedOn", "1")
		setIsLoggedIn(true)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
