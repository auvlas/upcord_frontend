import { useState, useEffect } from "react"
import useTouchScreen from "#src/hooks"
import Cookies from "js-cookie"
import Messenger from "#src/Messenger/Messenger"
import Authorization from "#src/Authorization/Authorization"
import SignIn from "#src/Authorization/Sign/SignIn.tsx"
import SignUp from "#src/Authorization/Sign/SignUp.tsx"
import type SignForm from "#src/Authorization/types"


function App() {
    const isTouch: boolean = useTouchScreen()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
        const token: string = Cookies.get("jwt_token")

        if (token) {
            document.body.className = ""
            setIsAuthenticated(true)
        } else {
            document.body.className = "authorization"
            setIsAuthenticated(false)
        }
        
        return () => {
            document.body.className = ""
        }
    }, [isAuthenticated])

    if (!isAuthenticated) {
        let sign: SignForm = SignIn

        switch (location.pathname) {
            case "/signin":
            case "/login":
                sign = SignIn
                break;
            case "/signup":
            case "/registration":
                sign = SignUp
                break;
            default:
                sign = SignIn
                break;
        }

        return (
            <>
                <Authorization isTouch = {isTouch} sign = {sign} ok = { () => { 
                    Cookies.set("jwt_token", "fhhcvbaskxd")
                    setIsAuthenticated(true)
		}} />
            </>
        )
    
    }

    return (
        <>
            <Messenger />
        </>
    )
}

export default App
