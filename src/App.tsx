import { useState, useEffect } from "react"
import { useTouchScreen } from "./hooks"
import Cookies from "js-cookie"
import Messenger from "./Messenger/Messenger"
import Authorization from "./Authorization/Authorization"

function App() {
    const isTouch: boolean = useTouchScreen()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
        const token = Cookies.get("jwt_token")

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
        return (
            <>
                <Authorization isTouch = {isTouch} ok = { () => { 
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
