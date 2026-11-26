import Cookies from "js-cookie"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "#src/App"
import i18n from "#src/i18n"

import "bootstrap-icons/font/bootstrap-icons.css"
import "#src/main.css"


Cookies.remove("jwt_token")

createRoot(document.body!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
