import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import Messenger from "./Messenger/Messenger"
import Authorization from "./Authorization/Authorization"

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
        const token = Cookies.get('jwt_token')

        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    if (!isAuthenticated) {
        return (
            <>
                <Authorization ok = { () => setIsAuthenticated(true) } />
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
