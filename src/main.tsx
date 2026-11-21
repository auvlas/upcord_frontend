import Cookies from "js-cookie"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import i18n from "./i18n"

import "bootstrap-icons/font/bootstrap-icons.css"
import "./main.css"


Cookies.remove("jwt_token")

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
